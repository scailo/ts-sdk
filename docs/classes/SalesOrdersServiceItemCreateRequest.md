[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceItemCreateRequest

# Class: SalesOrdersServiceItemCreateRequest

Describes the parameters required to add an item to a sales order

**`Generated`**

from message Scailo.SalesOrdersServiceItemCreateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)\>

  ↳ **`SalesOrdersServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](SalesOrdersServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](SalesOrdersServiceItemCreateRequest.md#clientquantity)
- [clientUomId](SalesOrdersServiceItemCreateRequest.md#clientuomid)
- [deliveryDate](SalesOrdersServiceItemCreateRequest.md#deliverydate)
- [discount](SalesOrdersServiceItemCreateRequest.md#discount)
- [familyId](SalesOrdersServiceItemCreateRequest.md#familyid)
- [internalQuantity](SalesOrdersServiceItemCreateRequest.md#internalquantity)
- [isInvoiceable](SalesOrdersServiceItemCreateRequest.md#isinvoiceable)
- [salesOrderId](SalesOrdersServiceItemCreateRequest.md#salesorderid)
- [specifications](SalesOrdersServiceItemCreateRequest.md#specifications)
- [taxGroupId](SalesOrdersServiceItemCreateRequest.md#taxgroupid)
- [unitPrice](SalesOrdersServiceItemCreateRequest.md#unitprice)
- [userComment](SalesOrdersServiceItemCreateRequest.md#usercomment)
- [fields](SalesOrdersServiceItemCreateRequest.md#fields)
- [runtime](SalesOrdersServiceItemCreateRequest.md#runtime)
- [typeName](SalesOrdersServiceItemCreateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceItemCreateRequest.md#clone)
- [equals](SalesOrdersServiceItemCreateRequest.md#equals)
- [fromBinary](SalesOrdersServiceItemCreateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceItemCreateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceItemCreateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceItemCreateRequest.md#gettype)
- [toBinary](SalesOrdersServiceItemCreateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceItemCreateRequest.md#tojson)
- [toJson](SalesOrdersServiceItemCreateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceItemCreateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceItemCreateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceItemCreateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceItemCreateRequest**(`data?`): [`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)\> |

#### Returns

[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:1068

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

src/sales_orders.scailo_pb.ts:1024

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

src/sales_orders.scailo_pb.ts:1017

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

src/sales_orders.scailo_pb.ts:1010

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

src/sales_orders.scailo_pb.ts:1052

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

src/sales_orders.scailo_pb.ts:1045

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

src/sales_orders.scailo_pb.ts:996

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:1003

___

### isInvoiceable

• **isInvoiceable**: `boolean` = `false`

Stores if the item can be invoiced

**`Generated`**

from field: bool is_invoiceable = 22;

#### Defined in

src/sales_orders.scailo_pb.ts:1066

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

Stores the sales order ID

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:989

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 21;

#### Defined in

src/sales_orders.scailo_pb.ts:1059

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

src/sales_orders.scailo_pb.ts:1038

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

src/sales_orders.scailo_pb.ts:1031

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:982

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:1075

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:1073

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceItemCreateRequest"``

#### Defined in

src/sales_orders.scailo_pb.ts:1074

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:1103

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1091

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1095

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemCreateRequest`](SalesOrdersServiceItemCreateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1099
