[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeaveAdjustmentRecord

# Class: LeaveAdjustmentRecord

Describes the parameters that constitute a record associated to a record

**`Generated`**

from message Scailo.LeaveAdjustmentRecord

## Hierarchy

- `Message`\<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\>

  ↳ **`LeaveAdjustmentRecord`**

## Table of contents

### Constructors

- [constructor](LeaveAdjustmentRecord.md#constructor)

### Properties

- [approvalMetadata](LeaveAdjustmentRecord.md#approvalmetadata)
- [entityUuid](LeaveAdjustmentRecord.md#entityuuid)
- [leaveAdjustmentId](LeaveAdjustmentRecord.md#leaveadjustmentid)
- [leaveTypeId](LeaveAdjustmentRecord.md#leavetypeid)
- [metadata](LeaveAdjustmentRecord.md#metadata)
- [needApproval](LeaveAdjustmentRecord.md#needapproval)
- [quantity](LeaveAdjustmentRecord.md#quantity)
- [uomId](LeaveAdjustmentRecord.md#uomid)
- [userComment](LeaveAdjustmentRecord.md#usercomment)
- [fields](LeaveAdjustmentRecord.md#fields)
- [runtime](LeaveAdjustmentRecord.md#runtime)
- [typeName](LeaveAdjustmentRecord.md#typename)

### Methods

- [clone](LeaveAdjustmentRecord.md#clone)
- [equals](LeaveAdjustmentRecord.md#equals)
- [fromBinary](LeaveAdjustmentRecord.md#frombinary)
- [fromJson](LeaveAdjustmentRecord.md#fromjson)
- [fromJsonString](LeaveAdjustmentRecord.md#fromjsonstring)
- [getType](LeaveAdjustmentRecord.md#gettype)
- [toBinary](LeaveAdjustmentRecord.md#tobinary)
- [toJSON](LeaveAdjustmentRecord.md#tojson)
- [toJson](LeaveAdjustmentRecord.md#tojson-1)
- [toJsonString](LeaveAdjustmentRecord.md#tojsonstring)
- [equals](LeaveAdjustmentRecord.md#equals-1)
- [fromBinary](LeaveAdjustmentRecord.md#frombinary-1)
- [fromJson](LeaveAdjustmentRecord.md#fromjson-1)
- [fromJsonString](LeaveAdjustmentRecord.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveAdjustmentRecord**(`data?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\> |

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Overrides

Message\&lt;LeaveAdjustmentRecord\&gt;.constructor

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:869](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L869)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:820](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L820)

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

[src/leaves_adjustments.scailo_pb.ts:804](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L804)

___

### leaveAdjustmentId

• **leaveAdjustmentId**: `bigint` = `protoInt64.zero`

Stores the leave adjustment ID

**`Generated`**

from field: uint64 leave_adjustment_id = 10;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:846](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L846)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

Stores the leave type ID

**`Generated`**

from field: uint64 leave_type_id = 11;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L853)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L812)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L832)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity of leaves (in cents)

**`Generated`**

from field: uint64 quantity = 13;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L867)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: uint64 uom_id = 12;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L860)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L839)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L876)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:874](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L874)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeaveAdjustmentRecord"``

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:875](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L875)

## Methods

### clone

▸ **clone**(): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

Create a deep copy.

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md) \| `PlainMessage`\<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\>

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
| `a` | `undefined` \| [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md) \| `PlainMessage`\<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\> |
| `b` | `undefined` \| [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md) \| `PlainMessage`\<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L900)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L888)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L892)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:896](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_adjustments.scailo_pb.ts#L896)
