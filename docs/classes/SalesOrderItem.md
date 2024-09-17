[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderItem

# Class: SalesOrderItem

Describes the parameters that constitute an item associated to a sales order

**`Generated`**

from message Scailo.SalesOrderItem

## Hierarchy

- `Message`\<[`SalesOrderItem`](SalesOrderItem.md)\>

  ↳ **`SalesOrderItem`**

## Table of contents

### Constructors

- [constructor](SalesOrderItem.md#constructor)

### Properties

- [approvalMetadata](SalesOrderItem.md#approvalmetadata)
- [bundledWithId](SalesOrderItem.md#bundledwithid)
- [clientFamilyCode](SalesOrderItem.md#clientfamilycode)
- [clientQuantity](SalesOrderItem.md#clientquantity)
- [clientUomId](SalesOrderItem.md#clientuomid)
- [deliveryDate](SalesOrderItem.md#deliverydate)
- [discount](SalesOrderItem.md#discount)
- [discountedUnitPrice](SalesOrderItem.md#discountedunitprice)
- [entityUuid](SalesOrderItem.md#entityuuid)
- [familyId](SalesOrderItem.md#familyid)
- [internalQuantity](SalesOrderItem.md#internalquantity)
- [isInvoiceable](SalesOrderItem.md#isinvoiceable)
- [metadata](SalesOrderItem.md#metadata)
- [needApproval](SalesOrderItem.md#needapproval)
- [salesOrderId](SalesOrderItem.md#salesorderid)
- [specifications](SalesOrderItem.md#specifications)
- [taxGroupId](SalesOrderItem.md#taxgroupid)
- [unitPrice](SalesOrderItem.md#unitprice)
- [userComment](SalesOrderItem.md#usercomment)
- [fields](SalesOrderItem.md#fields)
- [runtime](SalesOrderItem.md#runtime)
- [typeName](SalesOrderItem.md#typename)

### Methods

- [clone](SalesOrderItem.md#clone)
- [equals](SalesOrderItem.md#equals)
- [fromBinary](SalesOrderItem.md#frombinary)
- [fromJson](SalesOrderItem.md#fromjson)
- [fromJsonString](SalesOrderItem.md#fromjsonstring)
- [getType](SalesOrderItem.md#gettype)
- [toBinary](SalesOrderItem.md#tobinary)
- [toJSON](SalesOrderItem.md#tojson)
- [toJson](SalesOrderItem.md#tojson-1)
- [toJsonString](SalesOrderItem.md#tojsonstring)
- [equals](SalesOrderItem.md#equals-1)
- [fromBinary](SalesOrderItem.md#frombinary-1)
- [fromJson](SalesOrderItem.md#fromjson-1)
- [fromJsonString](SalesOrderItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderItem**(`data?`): [`SalesOrderItem`](SalesOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderItem`](SalesOrderItem.md)\> |

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

#### Overrides

Message\&lt;SalesOrderItem\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:1378

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/sales_orders.scailo_pb.ts:1264

___

### bundledWithId

• **bundledWithId**: `bigint` = `protoInt64.zero`

Stores the ID of the sales orderder item with which this item is bundled with

**`Generated`**

from field: uint64 bundled_with_id = 11;

#### Defined in

src/sales_orders.scailo_pb.ts:1292

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

src/sales_orders.scailo_pb.ts:1327

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

src/sales_orders.scailo_pb.ts:1320

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

src/sales_orders.scailo_pb.ts:1313

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

src/sales_orders.scailo_pb.ts:1355

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

src/sales_orders.scailo_pb.ts:1348

___

### discountedUnitPrice

• **discountedUnitPrice**: `bigint` = `protoInt64.zero`

Stores the unit price after factoring in the discount

**`Generated`**

from field: uint64 discounted_unit_price = 30;

#### Defined in

src/sales_orders.scailo_pb.ts:1376

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:1250

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

src/sales_orders.scailo_pb.ts:1299

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:1306

___

### isInvoiceable

• **isInvoiceable**: `boolean` = `false`

Stores if the item can be invoiced

**`Generated`**

from field: bool is_invoiceable = 22;

#### Defined in

src/sales_orders.scailo_pb.ts:1369

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales order

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/sales_orders.scailo_pb.ts:1257

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/sales_orders.scailo_pb.ts:1271

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

Stores the sales order ID

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:1285

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 21;

#### Defined in

src/sales_orders.scailo_pb.ts:1362

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

src/sales_orders.scailo_pb.ts:1341

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

src/sales_orders.scailo_pb.ts:1334

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/sales_orders.scailo_pb.ts:1278

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:1385

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:1383

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderItem"``

#### Defined in

src/sales_orders.scailo_pb.ts:1384

## Methods

### clone

▸ **clone**(): [`SalesOrderItem`](SalesOrderItem.md)

Create a deep copy.

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderItem`](SalesOrderItem.md) \| `PlainMessage`\<[`SalesOrderItem`](SalesOrderItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderItem`](SalesOrderItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderItem`](SalesOrderItem.md)\>

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
| `a` | `undefined` \| [`SalesOrderItem`](SalesOrderItem.md) \| `PlainMessage`\<[`SalesOrderItem`](SalesOrderItem.md)\> |
| `b` | `undefined` \| [`SalesOrderItem`](SalesOrderItem.md) \| `PlainMessage`\<[`SalesOrderItem`](SalesOrderItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:1419

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderItem`](SalesOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1407

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderItem`](SalesOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1411

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderItem`](SalesOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1415
