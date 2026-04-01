[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceRecordUpdateRequest

# Class: LeavesAdjustmentsServiceRecordUpdateRequest

Describes the parameters required to update a record

**`Generated`**

from message Scailo.LeavesAdjustmentsServiceRecordUpdateRequest

## Hierarchy

- `Message`\<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\>

  ↳ **`LeavesAdjustmentsServiceRecordUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceRecordUpdateRequest.md#constructor)

### Properties

- [id](LeavesAdjustmentsServiceRecordUpdateRequest.md#id)
- [leaveAdjustmentId](LeavesAdjustmentsServiceRecordUpdateRequest.md#leaveadjustmentid)
- [leaveTypeId](LeavesAdjustmentsServiceRecordUpdateRequest.md#leavetypeid)
- [quantity](LeavesAdjustmentsServiceRecordUpdateRequest.md#quantity)
- [uomId](LeavesAdjustmentsServiceRecordUpdateRequest.md#uomid)
- [userComment](LeavesAdjustmentsServiceRecordUpdateRequest.md#usercomment)
- [fields](LeavesAdjustmentsServiceRecordUpdateRequest.md#fields)
- [runtime](LeavesAdjustmentsServiceRecordUpdateRequest.md#runtime)
- [typeName](LeavesAdjustmentsServiceRecordUpdateRequest.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceRecordUpdateRequest.md#clone)
- [equals](LeavesAdjustmentsServiceRecordUpdateRequest.md#equals)
- [fromBinary](LeavesAdjustmentsServiceRecordUpdateRequest.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceRecordUpdateRequest.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceRecordUpdateRequest.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceRecordUpdateRequest.md#gettype)
- [toBinary](LeavesAdjustmentsServiceRecordUpdateRequest.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceRecordUpdateRequest.md#tojson)
- [toJson](LeavesAdjustmentsServiceRecordUpdateRequest.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceRecordUpdateRequest.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceRecordUpdateRequest.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceRecordUpdateRequest.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceRecordUpdateRequest.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceRecordUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceRecordUpdateRequest**(`data?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\> |

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Overrides

Message\&lt;LeavesAdjustmentsServiceRecordUpdateRequest\&gt;.constructor

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L711)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:681](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L681)

___

### leaveAdjustmentId

• **leaveAdjustmentId**: `bigint` = `protoInt64.zero`

Stores the leave adjustment ID

**`Generated`**

from field: uint64 leave_adjustment_id = 10;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:688](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L688)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

Stores the leave type ID

**`Generated`**

from field: uint64 leave_type_id = 11;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:695](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L695)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity of leaves (in cents)

**`Generated`**

from field: uint64 quantity = 13;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L709)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: uint64 uom_id = 12;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:702](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L702)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L674)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L718)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:716](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L716)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsServiceRecordUpdateRequest"``

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L717)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L739)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:727](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L727)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:731](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L731)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:735](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_adjustments.scailo_pb.ts#L735)
