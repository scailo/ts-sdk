[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceRecordCreateRequest

# Class: LeavesAdjustmentsServiceRecordCreateRequest

Describes the parameters required to add a record

**`Generated`**

from message Scailo.LeavesAdjustmentsServiceRecordCreateRequest

## Hierarchy

- `Message`\<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\>

  ↳ **`LeavesAdjustmentsServiceRecordCreateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceRecordCreateRequest.md#constructor)

### Properties

- [leaveAdjustmentId](LeavesAdjustmentsServiceRecordCreateRequest.md#leaveadjustmentid)
- [leaveTypeId](LeavesAdjustmentsServiceRecordCreateRequest.md#leavetypeid)
- [quantity](LeavesAdjustmentsServiceRecordCreateRequest.md#quantity)
- [uomId](LeavesAdjustmentsServiceRecordCreateRequest.md#uomid)
- [userComment](LeavesAdjustmentsServiceRecordCreateRequest.md#usercomment)
- [fields](LeavesAdjustmentsServiceRecordCreateRequest.md#fields)
- [runtime](LeavesAdjustmentsServiceRecordCreateRequest.md#runtime)
- [typeName](LeavesAdjustmentsServiceRecordCreateRequest.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceRecordCreateRequest.md#clone)
- [equals](LeavesAdjustmentsServiceRecordCreateRequest.md#equals)
- [fromBinary](LeavesAdjustmentsServiceRecordCreateRequest.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceRecordCreateRequest.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceRecordCreateRequest.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceRecordCreateRequest.md#gettype)
- [toBinary](LeavesAdjustmentsServiceRecordCreateRequest.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceRecordCreateRequest.md#tojson)
- [toJson](LeavesAdjustmentsServiceRecordCreateRequest.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceRecordCreateRequest.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceRecordCreateRequest.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceRecordCreateRequest.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceRecordCreateRequest.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceRecordCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceRecordCreateRequest**(`data?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\> |

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Overrides

Message\&lt;LeavesAdjustmentsServiceRecordCreateRequest\&gt;.constructor

#### Defined in

src/leaves_adjustments.scailo_pb.ts:561

## Properties

### leaveAdjustmentId

• **leaveAdjustmentId**: `bigint` = `protoInt64.zero`

Stores the leave adjustment ID

**`Generated`**

from field: uint64 leave_adjustment_id = 10;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:538

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

Stores the leave type ID

**`Generated`**

from field: uint64 leave_type_id = 11;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:545

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity of leaves (in cents)

**`Generated`**

from field: uint64 quantity = 13;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:559

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: uint64 uom_id = 12;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:552

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:531

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:568

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:566

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsServiceRecordCreateRequest"``

#### Defined in

src/leaves_adjustments.scailo_pb.ts:567

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:588

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:576

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:580

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:584
