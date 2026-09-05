[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServiceCreateRequest

# Class: RolesServiceCreateRequest

Request message for creating and defining a new security Role.
This record maps RBAC structures, descriptive identifiers, specialized system access flags
(Vault storage restrictions and network gateway protocols), and granular menu privilege definitions.

**Note:** This is the primary entry point for Information Security, HR, and Admins to
construct permission tiers, enforce least-privilege principles, and provision access profiles.

**`Generated`**

from message Scailo.RolesServiceCreateRequest

## Hierarchy

- `Message`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\>

  ↳ **`RolesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](RolesServiceCreateRequest.md#constructor)

### Properties

- [accessList](RolesServiceCreateRequest.md#accesslist)
- [code](RolesServiceCreateRequest.md#code)
- [description](RolesServiceCreateRequest.md#description)
- [entityUuid](RolesServiceCreateRequest.md#entityuuid)
- [httpAccess](RolesServiceCreateRequest.md#httpaccess)
- [httpsAccess](RolesServiceCreateRequest.md#httpsaccess)
- [name](RolesServiceCreateRequest.md#name)
- [userComment](RolesServiceCreateRequest.md#usercomment)
- [vaultAccess](RolesServiceCreateRequest.md#vaultaccess)
- [vaultRootFolderInteractions](RolesServiceCreateRequest.md#vaultrootfolderinteractions)
- [fields](RolesServiceCreateRequest.md#fields)
- [runtime](RolesServiceCreateRequest.md#runtime)
- [typeName](RolesServiceCreateRequest.md#typename)

### Methods

- [clone](RolesServiceCreateRequest.md#clone)
- [equals](RolesServiceCreateRequest.md#equals)
- [fromBinary](RolesServiceCreateRequest.md#frombinary)
- [fromJson](RolesServiceCreateRequest.md#fromjson)
- [fromJsonString](RolesServiceCreateRequest.md#fromjsonstring)
- [getType](RolesServiceCreateRequest.md#gettype)
- [toBinary](RolesServiceCreateRequest.md#tobinary)
- [toJSON](RolesServiceCreateRequest.md#tojson)
- [toJson](RolesServiceCreateRequest.md#tojson-1)
- [toJsonString](RolesServiceCreateRequest.md#tojsonstring)
- [equals](RolesServiceCreateRequest.md#equals-1)
- [fromBinary](RolesServiceCreateRequest.md#frombinary-1)
- [fromJson](RolesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](RolesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceCreateRequest**(`data?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Overrides

Message\&lt;RolesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/roles.scailo_pb.ts:255](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L255)

## Properties

### accessList

• **accessList**: [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection mapping explicit menu, routing, or function view identifiers to the role's structural access tree.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of RolesServiceAccessCreateAndUpdateRequest structural entries. Can be empty if no initial menu maps are assigned.

**`Generated`**

from field: repeated Scailo.RolesServiceAccessCreateAndUpdateRequest access_list = 20;

#### Defined in

[src/roles.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L253)

___

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique code or system-level alphanumeric token used to evaluate permissions programmatically within backend middleware.

**`Example`**

```ts
"ROLE_SR_DOC_AUDITOR"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/roles.scailo_pb.ts:167](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L167)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Clarifying scope of responsibilities, clearance level, or business context associated with this security profile.

**`Example`**

```ts
"Grants full read access to client contracts and verification documents while enforcing strict root storage write blocks."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string description = 12;

#### Defined in

[src/roles.scailo_pb.ts:183](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L183)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/roles.scailo_pb.ts:119](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L119)

___

### httpAccess

• `Optional` **httpAccess**: `boolean`

**`Optional`**

**`Description`**

Flag determining whether the role can execute incoming operations over unencrypted HTTP endpoints or within a designated local perimeter network.

**`Example`**

```ts
false
```

**`Format`**

Boolean value (`true` or `false`). Defaults to false if unassigned.

**`Generated`**

from field: optional bool http_access = 15;

#### Defined in

[src/roles.scailo_pb.ts:225](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L225)

___

### httpsAccess

• `Optional` **httpsAccess**: `boolean`

**`Optional`**

**`Description`**

Flag determining whether the role can execute operations over encrypted HTTPS gateways or through public-facing fully qualified domain names (FQDNs).

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`). Defaults to false if unassigned.

**`Generated`**

from field: optional bool https_access = 16;

#### Defined in

[src/roles.scailo_pb.ts:239](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L239)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official, displayable name of the security role.

**`Example`**

```ts
"Senior Document Auditor"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/roles.scailo_pb.ts:151](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L151)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 2;

#### Defined in

[src/roles.scailo_pb.ts:135](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L135)

___

### vaultAccess

• `Optional` **vaultAccess**: `boolean`

**`Optional`**

**`Description`**

Flag determining whether accounts possessing this role are permitted to access the secure Vault file system.

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`). Defaults to false if unassigned.

**`Generated`**

from field: optional bool vault_access = 13;

#### Defined in

[src/roles.scailo_pb.ts:197](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L197)

___

### vaultRootFolderInteractions

• `Optional` **vaultRootFolderInteractions**: `boolean`

**`Optional`**

**`Description`**

Flag determining whether this role is authorized to perform structural operations (such as writes, modifications, or deletions) within the primary root folder of the Vault file system.

**`Example`**

```ts
false
```

**`Format`**

Boolean value (`true` or `false`). Defaults to false if unassigned.

**`Generated`**

from field: optional bool vault_root_folder_interactions = 14;

#### Defined in

[src/roles.scailo_pb.ts:211](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L211)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles.scailo_pb.ts:262](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L262)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L260)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServiceCreateRequest"``

#### Defined in

[src/roles.scailo_pb.ts:261](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L261)

## Methods

### clone

▸ **clone**(): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md) \| `PlainMessage`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md) \| `PlainMessage`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md) \| `PlainMessage`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles.scailo_pb.ts:287](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L287)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Defined in

[src/roles.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L275)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Defined in

[src/roles.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L279)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Defined in

[src/roles.scailo_pb.ts:283](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L283)
