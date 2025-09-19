[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobInwardItem

# Class: OutwardJobInwardItem

Describes the parameters that constitute an inward item associated to a outward job

**`Generated`**

from message Scailo.OutwardJobInwardItem

## Hierarchy

- `Message`\<[`OutwardJobInwardItem`](OutwardJobInwardItem.md)\>

  ↳ **`OutwardJobInwardItem`**

## Table of contents

### Constructors

- [constructor](OutwardJobInwardItem.md#constructor)

### Properties

- [approvalMetadata](OutwardJobInwardItem.md#approvalmetadata)
- [deliveryDate](OutwardJobInwardItem.md#deliverydate)
- [entityUuid](OutwardJobInwardItem.md#entityuuid)
- [familyId](OutwardJobInwardItem.md#familyid)
- [familyUuid](OutwardJobInwardItem.md#familyuuid)
- [internalQuantity](OutwardJobInwardItem.md#internalquantity)
- [metadata](OutwardJobInwardItem.md#metadata)
- [needApproval](OutwardJobInwardItem.md#needapproval)
- [outwardJobId](OutwardJobInwardItem.md#outwardjobid)
- [outwardJobUuid](OutwardJobInwardItem.md#outwardjobuuid)
- [specifications](OutwardJobInwardItem.md#specifications)
- [userComment](OutwardJobInwardItem.md#usercomment)
- [fields](OutwardJobInwardItem.md#fields)
- [runtime](OutwardJobInwardItem.md#runtime)
- [typeName](OutwardJobInwardItem.md#typename)

### Methods

- [clone](OutwardJobInwardItem.md#clone)
- [equals](OutwardJobInwardItem.md#equals)
- [fromBinary](OutwardJobInwardItem.md#frombinary)
- [fromJson](OutwardJobInwardItem.md#fromjson)
- [fromJsonString](OutwardJobInwardItem.md#fromjsonstring)
- [getType](OutwardJobInwardItem.md#gettype)
- [toBinary](OutwardJobInwardItem.md#tobinary)
- [toJSON](OutwardJobInwardItem.md#tojson)
- [toJson](OutwardJobInwardItem.md#tojson-1)
- [toJsonString](OutwardJobInwardItem.md#tojsonstring)
- [equals](OutwardJobInwardItem.md#equals-1)
- [fromBinary](OutwardJobInwardItem.md#frombinary-1)
- [fromJson](OutwardJobInwardItem.md#fromjson-1)
- [fromJsonString](OutwardJobInwardItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobInwardItem**(`data?`): [`OutwardJobInwardItem`](OutwardJobInwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobInwardItem`](OutwardJobInwardItem.md)\> |

#### Returns

[`OutwardJobInwardItem`](OutwardJobInwardItem.md)

#### Overrides

Message\&lt;OutwardJobInwardItem\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1162)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1094)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1136)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1080](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1080)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1122](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1122)

___

### familyUuid

• **familyUuid**: `string` = `""`

The UUID of the associated family

----------------------------------------

**`Generated`**

from field: string family_uuid = 111;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1160](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1160)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1129)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this outward job

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1087](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1087)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1101)

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1115)

___

### outwardJobUuid

• **outwardJobUuid**: `string` = `""`

----------------------------------------
The UUID of the associated outward job

**`Generated`**

from field: string outward_job_uuid = 110;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1151](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1151)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1143)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1108)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:1169](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1169)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:1167](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1167)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobInwardItem"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:1168](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1168)

## Methods

### clone

▸ **clone**(): [`OutwardJobInwardItem`](OutwardJobInwardItem.md)

Create a deep copy.

#### Returns

[`OutwardJobInwardItem`](OutwardJobInwardItem.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobInwardItem`](OutwardJobInwardItem.md) \| `PlainMessage`\<[`OutwardJobInwardItem`](OutwardJobInwardItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobInwardItem`](OutwardJobInwardItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobInwardItem`](OutwardJobInwardItem.md)\>

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
| `a` | `undefined` \| [`OutwardJobInwardItem`](OutwardJobInwardItem.md) \| `PlainMessage`\<[`OutwardJobInwardItem`](OutwardJobInwardItem.md)\> |
| `b` | `undefined` \| [`OutwardJobInwardItem`](OutwardJobInwardItem.md) \| `PlainMessage`\<[`OutwardJobInwardItem`](OutwardJobInwardItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:1196](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1196)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobInwardItem`](OutwardJobInwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobInwardItem`](OutwardJobInwardItem.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1184)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobInwardItem`](OutwardJobInwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardItem`](OutwardJobInwardItem.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:1188](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1188)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobInwardItem`](OutwardJobInwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardItem`](OutwardJobInwardItem.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:1192](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L1192)
