[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceItemCreateRequest

# Class: WorkOrdersServiceItemCreateRequest

Describes the parameters required to add an item to a work order

**`Generated`**

from message Scailo.WorkOrdersServiceItemCreateRequest

## Hierarchy

- `Message`\<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\>

  ↳ **`WorkOrdersServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceItemCreateRequest.md#constructor)

### Properties

- [deliveryDate](WorkOrdersServiceItemCreateRequest.md#deliverydate)
- [familyId](WorkOrdersServiceItemCreateRequest.md#familyid)
- [quantity](WorkOrdersServiceItemCreateRequest.md#quantity)
- [userComment](WorkOrdersServiceItemCreateRequest.md#usercomment)
- [workOrderId](WorkOrdersServiceItemCreateRequest.md#workorderid)
- [fields](WorkOrdersServiceItemCreateRequest.md#fields)
- [runtime](WorkOrdersServiceItemCreateRequest.md#runtime)
- [typeName](WorkOrdersServiceItemCreateRequest.md#typename)

### Methods

- [clone](WorkOrdersServiceItemCreateRequest.md#clone)
- [equals](WorkOrdersServiceItemCreateRequest.md#equals)
- [fromBinary](WorkOrdersServiceItemCreateRequest.md#frombinary)
- [fromJson](WorkOrdersServiceItemCreateRequest.md#fromjson)
- [fromJsonString](WorkOrdersServiceItemCreateRequest.md#fromjsonstring)
- [getType](WorkOrdersServiceItemCreateRequest.md#gettype)
- [toBinary](WorkOrdersServiceItemCreateRequest.md#tobinary)
- [toJSON](WorkOrdersServiceItemCreateRequest.md#tojson)
- [toJson](WorkOrdersServiceItemCreateRequest.md#tojson-1)
- [toJsonString](WorkOrdersServiceItemCreateRequest.md#tojsonstring)
- [equals](WorkOrdersServiceItemCreateRequest.md#equals-1)
- [fromBinary](WorkOrdersServiceItemCreateRequest.md#frombinary-1)
- [fromJson](WorkOrdersServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceItemCreateRequest**(`data?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\> |

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Overrides

Message\&lt;WorkOrdersServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/work_orders.scailo_pb.ts:723

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

src/work_orders.scailo_pb.ts:721

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/work_orders.scailo_pb.ts:707

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

src/work_orders.scailo_pb.ts:714

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/work_orders.scailo_pb.ts:693

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

Stores the work order ID

**`Generated`**

from field: uint64 work_order_id = 10;

#### Defined in

src/work_orders.scailo_pb.ts:700

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/work_orders.scailo_pb.ts:730

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/work_orders.scailo_pb.ts:728

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrdersServiceItemCreateRequest"``

#### Defined in

src/work_orders.scailo_pb.ts:729

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/work_orders.scailo_pb.ts:750

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:738

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:742

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:746
