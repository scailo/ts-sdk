[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Role

# Class: Role

Represents a full Role within the system.

**`Generated`**

from message Scailo.Role

## Hierarchy

- `Message`\<[`Role`](Role.md)\>

  ↳ **`Role`**

## Table of contents

### Constructors

- [constructor](Role.md#constructor)

### Properties

- [accessList](Role.md#accesslist)
- [approvalMetadata](Role.md#approvalmetadata)
- [code](Role.md#code)
- [completedOn](Role.md#completedon)
- [description](Role.md#description)
- [entityUuid](Role.md#entityuuid)
- [httpAccess](Role.md#httpaccess)
- [httpsAccess](Role.md#httpsaccess)
- [logs](Role.md#logs)
- [metadata](Role.md#metadata)
- [name](Role.md#name)
- [status](Role.md#status)
- [vaultAccess](Role.md#vaultaccess)
- [vaultRootFolderInteractions](Role.md#vaultrootfolderinteractions)
- [fields](Role.md#fields)
- [runtime](Role.md#runtime)
- [typeName](Role.md#typename)

### Methods

- [clone](Role.md#clone)
- [equals](Role.md#equals)
- [fromBinary](Role.md#frombinary)
- [fromJson](Role.md#fromjson)
- [fromJsonString](Role.md#fromjsonstring)
- [getType](Role.md#gettype)
- [toBinary](Role.md#tobinary)
- [toJSON](Role.md#tojson)
- [toJson](Role.md#tojson-1)
- [toJsonString](Role.md#tojsonstring)
- [equals](Role.md#equals-1)
- [fromBinary](Role.md#frombinary-1)
- [fromJson](Role.md#fromjson-1)
- [fromJsonString](Role.md#fromjsonstring-1)

## Constructors

### constructor

• **new Role**(`data?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Role`](Role.md)\> |

#### Returns

[`Role`](Role.md)

#### Overrides

Message\&lt;Role\&gt;.constructor

#### Defined in

[src/roles.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L644)

## Properties

### accessList

• **accessList**: [`RoleAccess`](RoleAccess.md)[] = `[]`

**`Description`**

A collection mapping explicit menu, routing, or function view identifiers to the role's structural access tree.

**`Example`**

```ts
[]
```

**`Generated`**

from field: repeated Scailo.RoleAccess access_list = 20;

#### Defined in

[src/roles.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L642)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/roles.scailo_pb.ts:536](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L536)

___

### code

• **code**: `string` = `""`

**`Description`**

The unique code or system-level alphanumeric token used to evaluate permissions programmatically within backend middleware.

**`Example`**

```ts
"ROLE_SR_DOC_AUDITOR"
```

**`Generated`**

from field: string code = 11;

#### Defined in

[src/roles.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L582)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/roles.scailo_pb.ts:562](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L562)

___

### description

• **description**: `string` = `""`

**`Description`**

Clarifying scope of responsibilities, clearance level, or business context associated with this security profile.

**`Example`**

```ts
"Grants full read access to client contracts and verification documents while enforcing strict root storage write blocks."
```

**`Generated`**

from field: string description = 12;

#### Defined in

[src/roles.scailo_pb.ts:592](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L592)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/roles.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L520)

___

### httpAccess

• **httpAccess**: `boolean` = `false`

**`Description`**

Flag determining whether the role can execute incoming operations over unencrypted HTTP endpoints or within a designated local perimeter network.

**`Example`**

```ts
false
```

**`Generated`**

from field: bool http_access = 15;

#### Defined in

[src/roles.scailo_pb.ts:622](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L622)

___

### httpsAccess

• **httpsAccess**: `boolean` = `false`

**`Description`**

Flag determining whether the role can execute operations over encrypted HTTPS gateways or through public-facing fully qualified domain names (FQDNs).

**`Example`**

```ts
true
```

**`Generated`**

from field: bool https_access = 16;

#### Defined in

[src/roles.scailo_pb.ts:632](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L632)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/roles.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L552)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/roles.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L528)

___

### name

• **name**: `string` = `""`

**`Description`**

The official, displayable name of the security role.

**`Example`**

```ts
"Senior Document Auditor"
```

**`Generated`**

from field: string name = 10;

#### Defined in

[src/roles.scailo_pb.ts:572](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L572)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/roles.scailo_pb.ts:544](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L544)

___

### vaultAccess

• **vaultAccess**: `boolean` = `false`

**`Description`**

Flag determining whether accounts possessing this role are permitted to access the secure Vault file system.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool vault_access = 13;

#### Defined in

[src/roles.scailo_pb.ts:602](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L602)

___

### vaultRootFolderInteractions

• **vaultRootFolderInteractions**: `boolean` = `false`

**`Description`**

Flag determining whether this role is authorized to perform structural operations (such as writes, modifications, or deletions) within the primary root folder of the Vault file system.

**`Example`**

```ts
false
```

**`Generated`**

from field: bool vault_root_folder_interactions = 14;

#### Defined in

[src/roles.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L612)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L651)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L649)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Role"``

#### Defined in

[src/roles.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L650)

## Methods

### clone

▸ **clone**(): [`Role`](Role.md)

Create a deep copy.

#### Returns

[`Role`](Role.md)

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
| `other` | `undefined` \| ``null`` \| [`Role`](Role.md) \| `PlainMessage`\<[`Role`](Role.md)\> |

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

▸ **getType**(): `MessageType`\<[`Role`](Role.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Role`](Role.md)\>

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
| `a` | `undefined` \| [`Role`](Role.md) \| `PlainMessage`\<[`Role`](Role.md)\> |
| `b` | `undefined` \| [`Role`](Role.md) \| `PlainMessage`\<[`Role`](Role.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles.scailo_pb.ts:680](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L680)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Defined in

[src/roles.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L668)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Defined in

[src/roles.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L672)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Defined in

[src/roles.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L676)
