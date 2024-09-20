[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderItemProspectiveInfoRequest

# Class: SalesOrderItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective sales order item

**`Generated`**

from message Scailo.SalesOrderItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)\>

  ↳ **`SalesOrderItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrderItemProspectiveInfoRequest.md#constructor)

### Properties

- [clientUomId](SalesOrderItemProspectiveInfoRequest.md#clientuomid)
- [familyId](SalesOrderItemProspectiveInfoRequest.md#familyid)
- [salesOrderId](SalesOrderItemProspectiveInfoRequest.md#salesorderid)
- [fields](SalesOrderItemProspectiveInfoRequest.md#fields)
- [runtime](SalesOrderItemProspectiveInfoRequest.md#runtime)
- [typeName](SalesOrderItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](SalesOrderItemProspectiveInfoRequest.md#clone)
- [equals](SalesOrderItemProspectiveInfoRequest.md#equals)
- [fromBinary](SalesOrderItemProspectiveInfoRequest.md#frombinary)
- [fromJson](SalesOrderItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](SalesOrderItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](SalesOrderItemProspectiveInfoRequest.md#gettype)
- [toBinary](SalesOrderItemProspectiveInfoRequest.md#tobinary)
- [toJSON](SalesOrderItemProspectiveInfoRequest.md#tojson)
- [toJson](SalesOrderItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](SalesOrderItemProspectiveInfoRequest.md#tojsonstring)
- [equals](SalesOrderItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](SalesOrderItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](SalesOrderItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](SalesOrderItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderItemProspectiveInfoRequest**(`data?`): [`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)\> |

#### Returns

[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;SalesOrderItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:1652

## Properties

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material (if 0, the value is ignored while retrieving records)

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:1650

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/sales_orders.scailo_pb.ts:1643

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

Stores the sales order ID

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:1636

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:1659

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:1657

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderItemProspectiveInfoRequest"``

#### Defined in

src/sales_orders.scailo_pb.ts:1658

## Methods

### clone

▸ **clone**(): [`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:1677

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1665

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1669

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItemProspectiveInfoRequest`](SalesOrderItemProspectiveInfoRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1673
