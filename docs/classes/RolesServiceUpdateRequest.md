[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServiceUpdateRequest

# Class: RolesServiceUpdateRequest

Request message for updating an existing Role record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, code, description, vault access, vault root folder interactions, http access, and https access
of an established Role.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.RolesServiceUpdateRequest

## Hierarchy

- `Message`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\>

  ↳ **`RolesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](RolesServiceUpdateRequest.md#constructor)

### Properties

- [accessList](RolesServiceUpdateRequest.md#accesslist)
- [code](RolesServiceUpdateRequest.md#code)
- [description](RolesServiceUpdateRequest.md#description)
- [httpAccess](RolesServiceUpdateRequest.md#httpaccess)
- [httpsAccess](RolesServiceUpdateRequest.md#httpsaccess)
- [id](RolesServiceUpdateRequest.md#id)
- [name](RolesServiceUpdateRequest.md#name)
- [notifyUsers](RolesServiceUpdateRequest.md#notifyusers)
- [userComment](RolesServiceUpdateRequest.md#usercomment)
- [vaultAccess](RolesServiceUpdateRequest.md#vaultaccess)
- [vaultRootFolderInteractions](RolesServiceUpdateRequest.md#vaultrootfolderinteractions)
- [fields](RolesServiceUpdateRequest.md#fields)
- [runtime](RolesServiceUpdateRequest.md#runtime)
- [typeName](RolesServiceUpdateRequest.md#typename)

### Methods

- [clone](RolesServiceUpdateRequest.md#clone)
- [equals](RolesServiceUpdateRequest.md#equals)
- [fromBinary](RolesServiceUpdateRequest.md#frombinary)
- [fromJson](RolesServiceUpdateRequest.md#fromjson)
- [fromJsonString](RolesServiceUpdateRequest.md#fromjsonstring)
- [getType](RolesServiceUpdateRequest.md#gettype)
- [toBinary](RolesServiceUpdateRequest.md#tobinary)
- [toJSON](RolesServiceUpdateRequest.md#tojson)
- [toJson](RolesServiceUpdateRequest.md#tojson-1)
- [toJsonString](RolesServiceUpdateRequest.md#tojsonstring)
- [equals](RolesServiceUpdateRequest.md#equals-1)
- [fromBinary](RolesServiceUpdateRequest.md#frombinary-1)
- [fromJson](RolesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](RolesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceUpdateRequest**(`data?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Overrides

Message\&lt;RolesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/roles.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L467)

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

[src/roles.scailo_pb.ts:465](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L465)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or system-level alphanumeric token used to evaluate permissions programmatically within backend middleware.

**`Example`**

```ts
"ROLE_SR_DOC_AUDITOR"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 11;

#### Defined in

[src/roles.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L379)

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

[src/roles.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L395)

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

[src/roles.scailo_pb.ts:437](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L437)

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

[src/roles.scailo_pb.ts:451](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L451)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/roles.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L335)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official, displayable name of the security role.

**`Example`**

```ts
"Senior Document Auditor"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/roles.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L363)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/roles.scailo_pb.ts:347](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L347)

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

from field: optional string user_comment = 1;

#### Defined in

[src/roles.scailo_pb.ts:319](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L319)

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

[src/roles.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L409)

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

[src/roles.scailo_pb.ts:423](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L423)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles.scailo_pb.ts:474](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L474)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L472)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServiceUpdateRequest"``

#### Defined in

[src/roles.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L473)

## Methods

### clone

▸ **clone**(): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md) \| `PlainMessage`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md) \| `PlainMessage`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md) \| `PlainMessage`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles.scailo_pb.ts:500](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L500)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Defined in

[src/roles.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L488)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Defined in

[src/roles.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L492)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Defined in

[src/roles.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/roles.scailo_pb.ts#L496)
