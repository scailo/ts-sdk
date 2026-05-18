[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyQCGroup

# Class: FamilyQCGroup

Describes the parameters that constitute a family qc group

**`Generated`**

from message Scailo.FamilyQCGroup

## Hierarchy

- `Message`\<[`FamilyQCGroup`](FamilyQCGroup.md)\>

  ↳ **`FamilyQCGroup`**

## Table of contents

### Constructors

- [constructor](FamilyQCGroup.md#constructor)

### Properties

- [approvalMetadata](FamilyQCGroup.md#approvalmetadata)
- [entityUuid](FamilyQCGroup.md#entityuuid)
- [familyId](FamilyQCGroup.md#familyid)
- [metadata](FamilyQCGroup.md#metadata)
- [needApproval](FamilyQCGroup.md#needapproval)
- [qcGroupId](FamilyQCGroup.md#qcgroupid)
- [userComment](FamilyQCGroup.md#usercomment)
- [fields](FamilyQCGroup.md#fields)
- [runtime](FamilyQCGroup.md#runtime)
- [typeName](FamilyQCGroup.md#typename)

### Methods

- [clone](FamilyQCGroup.md#clone)
- [equals](FamilyQCGroup.md#equals)
- [fromBinary](FamilyQCGroup.md#frombinary)
- [fromJson](FamilyQCGroup.md#fromjson)
- [fromJsonString](FamilyQCGroup.md#fromjsonstring)
- [getType](FamilyQCGroup.md#gettype)
- [toBinary](FamilyQCGroup.md#tobinary)
- [toJSON](FamilyQCGroup.md#tojson)
- [toJson](FamilyQCGroup.md#tojson-1)
- [toJsonString](FamilyQCGroup.md#tojsonstring)
- [equals](FamilyQCGroup.md#equals-1)
- [fromBinary](FamilyQCGroup.md#frombinary-1)
- [fromJson](FamilyQCGroup.md#fromjson-1)
- [fromJsonString](FamilyQCGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyQCGroup**(`data?`): [`FamilyQCGroup`](FamilyQCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyQCGroup`](FamilyQCGroup.md)\> |

#### Returns

[`FamilyQCGroup`](FamilyQCGroup.md)

#### Overrides

Message\&lt;FamilyQCGroup\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:3015](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3015)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/families.scailo_pb.ts:2984](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L2984)

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

[src/families.scailo_pb.ts:2968](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L2968)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

[src/families.scailo_pb.ts:3006](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3006)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/families.scailo_pb.ts:2976](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L2976)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/families.scailo_pb.ts:2992](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L2992)

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

Stores the qc group ID

**`Generated`**

from field: uint64 qc_group_id = 11;

#### Defined in

[src/families.scailo_pb.ts:3013](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3013)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/families.scailo_pb.ts:2999](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L2999)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:3022](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3022)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:3020](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3020)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyQCGroup"``

#### Defined in

[src/families.scailo_pb.ts:3021](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3021)

## Methods

### clone

▸ **clone**(): [`FamilyQCGroup`](FamilyQCGroup.md)

Create a deep copy.

#### Returns

[`FamilyQCGroup`](FamilyQCGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyQCGroup`](FamilyQCGroup.md) \| `PlainMessage`\<[`FamilyQCGroup`](FamilyQCGroup.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyQCGroup`](FamilyQCGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyQCGroup`](FamilyQCGroup.md)\>

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
| `a` | `undefined` \| [`FamilyQCGroup`](FamilyQCGroup.md) \| `PlainMessage`\<[`FamilyQCGroup`](FamilyQCGroup.md)\> |
| `b` | `undefined` \| [`FamilyQCGroup`](FamilyQCGroup.md) \| `PlainMessage`\<[`FamilyQCGroup`](FamilyQCGroup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:3044](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3044)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyQCGroup`](FamilyQCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyQCGroup`](FamilyQCGroup.md)

#### Defined in

[src/families.scailo_pb.ts:3032](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3032)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyQCGroup`](FamilyQCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyQCGroup`](FamilyQCGroup.md)

#### Defined in

[src/families.scailo_pb.ts:3036](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3036)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyQCGroup`](FamilyQCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyQCGroup`](FamilyQCGroup.md)

#### Defined in

[src/families.scailo_pb.ts:3040](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3040)
