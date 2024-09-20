[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceItemUpdateRequest

# Class: SalesOrdersServiceItemUpdateRequest

Describes the parameters required to update an item in a sales order

**`Generated`**

from message Scailo.SalesOrdersServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\>

  ↳ **`SalesOrdersServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](SalesOrdersServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](SalesOrdersServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](SalesOrdersServiceItemUpdateRequest.md#clientuomid)
- [deliveryDate](SalesOrdersServiceItemUpdateRequest.md#deliverydate)
- [discount](SalesOrdersServiceItemUpdateRequest.md#discount)
- [id](SalesOrdersServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesOrdersServiceItemUpdateRequest.md#internalquantity)
- [isInvoiceable](SalesOrdersServiceItemUpdateRequest.md#isinvoiceable)
- [specifications](SalesOrdersServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SalesOrdersServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](SalesOrdersServiceItemUpdateRequest.md#unitprice)
- [userComment](SalesOrdersServiceItemUpdateRequest.md#usercomment)
- [fields](SalesOrdersServiceItemUpdateRequest.md#fields)
- [runtime](SalesOrdersServiceItemUpdateRequest.md#runtime)
- [typeName](SalesOrdersServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceItemUpdateRequest.md#clone)
- [equals](SalesOrdersServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesOrdersServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesOrdersServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceItemUpdateRequest.md#tojson)
- [toJson](SalesOrdersServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceItemUpdateRequest**(`data?`): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\> |

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:1265

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

src/sales_orders.scailo_pb.ts:1221

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

src/sales_orders.scailo_pb.ts:1214

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

src/sales_orders.scailo_pb.ts:1207

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

src/sales_orders.scailo_pb.ts:1249

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

src/sales_orders.scailo_pb.ts:1242

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/sales_orders.scailo_pb.ts:1193

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:1200

___

### isInvoiceable

• **isInvoiceable**: `boolean` = `false`

Stores if the item can be invoiced

**`Generated`**

from field: bool is_invoiceable = 22;

#### Defined in

src/sales_orders.scailo_pb.ts:1263

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 21;

#### Defined in

src/sales_orders.scailo_pb.ts:1256

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

src/sales_orders.scailo_pb.ts:1235

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

src/sales_orders.scailo_pb.ts:1228

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:1186

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:1272

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:1270

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceItemUpdateRequest"``

#### Defined in

src/sales_orders.scailo_pb.ts:1271

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:1299

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1287

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1291

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1295
