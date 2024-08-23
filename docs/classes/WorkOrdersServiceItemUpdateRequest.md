[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceItemUpdateRequest

# Class: WorkOrdersServiceItemUpdateRequest

Describes the parameters required to update an item in a work order

**`Generated`**

from message Scailo.WorkOrdersServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)\>

  ↳ **`WorkOrdersServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryDate](WorkOrdersServiceItemUpdateRequest.md#deliverydate)
- [id](WorkOrdersServiceItemUpdateRequest.md#id)
- [quantity](WorkOrdersServiceItemUpdateRequest.md#quantity)
- [userComment](WorkOrdersServiceItemUpdateRequest.md#usercomment)
- [fields](WorkOrdersServiceItemUpdateRequest.md#fields)
- [runtime](WorkOrdersServiceItemUpdateRequest.md#runtime)
- [typeName](WorkOrdersServiceItemUpdateRequest.md#typename)

### Methods

- [clone](WorkOrdersServiceItemUpdateRequest.md#clone)
- [equals](WorkOrdersServiceItemUpdateRequest.md#equals)
- [fromBinary](WorkOrdersServiceItemUpdateRequest.md#frombinary)
- [fromJson](WorkOrdersServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](WorkOrdersServiceItemUpdateRequest.md#fromjsonstring)
- [getType](WorkOrdersServiceItemUpdateRequest.md#gettype)
- [toBinary](WorkOrdersServiceItemUpdateRequest.md#tobinary)
- [toJSON](WorkOrdersServiceItemUpdateRequest.md#tojson)
- [toJson](WorkOrdersServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](WorkOrdersServiceItemUpdateRequest.md#tojsonstring)
- [equals](WorkOrdersServiceItemUpdateRequest.md#equals-1)
- [fromBinary](WorkOrdersServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](WorkOrdersServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceItemUpdateRequest**(`data?`): [`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)\> |

#### Returns

[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;WorkOrdersServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/work_orders.scailo_pb.ts:713

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

src/work_orders.scailo_pb.ts:711

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/work_orders.scailo_pb.ts:697

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

src/work_orders.scailo_pb.ts:704

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/work_orders.scailo_pb.ts:690

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/work_orders.scailo_pb.ts:720

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/work_orders.scailo_pb.ts:718

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrdersServiceItemUpdateRequest"``

#### Defined in

src/work_orders.scailo_pb.ts:719

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/work_orders.scailo_pb.ts:739

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:727

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:731

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemUpdateRequest`](WorkOrdersServiceItemUpdateRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:735
