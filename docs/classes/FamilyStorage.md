[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyStorage

# Class: FamilyStorage

Describes the parameters that constitute a family storage

**`Generated`**

from message Scailo.FamilyStorage

## Hierarchy

- `Message`\<[`FamilyStorage`](FamilyStorage.md)\>

  ↳ **`FamilyStorage`**

## Table of contents

### Constructors

- [constructor](FamilyStorage.md#constructor)

### Properties

- [approvalMetadata](FamilyStorage.md#approvalmetadata)
- [entityUuid](FamilyStorage.md#entityuuid)
- [familyId](FamilyStorage.md#familyid)
- [metadata](FamilyStorage.md#metadata)
- [needApproval](FamilyStorage.md#needapproval)
- [storageId](FamilyStorage.md#storageid)
- [userComment](FamilyStorage.md#usercomment)
- [fields](FamilyStorage.md#fields)
- [runtime](FamilyStorage.md#runtime)
- [typeName](FamilyStorage.md#typename)

### Methods

- [clone](FamilyStorage.md#clone)
- [equals](FamilyStorage.md#equals)
- [fromBinary](FamilyStorage.md#frombinary)
- [fromJson](FamilyStorage.md#fromjson)
- [fromJsonString](FamilyStorage.md#fromjsonstring)
- [getType](FamilyStorage.md#gettype)
- [toBinary](FamilyStorage.md#tobinary)
- [toJSON](FamilyStorage.md#tojson)
- [toJson](FamilyStorage.md#tojson-1)
- [toJsonString](FamilyStorage.md#tojsonstring)
- [equals](FamilyStorage.md#equals-1)
- [fromBinary](FamilyStorage.md#frombinary-1)
- [fromJson](FamilyStorage.md#fromjson-1)
- [fromJsonString](FamilyStorage.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyStorage**(`data?`): [`FamilyStorage`](FamilyStorage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyStorage`](FamilyStorage.md)\> |

#### Returns

[`FamilyStorage`](FamilyStorage.md)

#### Overrides

Message\&lt;FamilyStorage\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:2524](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2524)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/families.scailo_pb.ts:2493](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2493)

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

[src/families.scailo_pb.ts:2477](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2477)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

[src/families.scailo_pb.ts:2515](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2515)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/families.scailo_pb.ts:2485](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2485)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/families.scailo_pb.ts:2501](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2501)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores the storage ID

**`Generated`**

from field: uint64 storage_id = 11;

#### Defined in

[src/families.scailo_pb.ts:2522](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2522)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/families.scailo_pb.ts:2508](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2508)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:2531](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2531)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:2529](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2529)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyStorage"``

#### Defined in

[src/families.scailo_pb.ts:2530](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2530)

## Methods

### clone

▸ **clone**(): [`FamilyStorage`](FamilyStorage.md)

Create a deep copy.

#### Returns

[`FamilyStorage`](FamilyStorage.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyStorage`](FamilyStorage.md) \| `PlainMessage`\<[`FamilyStorage`](FamilyStorage.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyStorage`](FamilyStorage.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyStorage`](FamilyStorage.md)\>

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
| `a` | `undefined` \| [`FamilyStorage`](FamilyStorage.md) \| `PlainMessage`\<[`FamilyStorage`](FamilyStorage.md)\> |
| `b` | `undefined` \| [`FamilyStorage`](FamilyStorage.md) \| `PlainMessage`\<[`FamilyStorage`](FamilyStorage.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:2553](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2553)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyStorage`](FamilyStorage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyStorage`](FamilyStorage.md)

#### Defined in

[src/families.scailo_pb.ts:2541](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2541)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyStorage`](FamilyStorage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyStorage`](FamilyStorage.md)

#### Defined in

[src/families.scailo_pb.ts:2545](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2545)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyStorage`](FamilyStorage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyStorage`](FamilyStorage.md)

#### Defined in

[src/families.scailo_pb.ts:2549](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/families.scailo_pb.ts#L2549)
