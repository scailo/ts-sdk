[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceCreateRequest

# Class: SalesOrdersServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.SalesOrdersServiceCreateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\>

  ↳ **`SalesOrdersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceCreateRequest.md#constructor)

### Properties

- [buyerClientId](SalesOrdersServiceCreateRequest.md#buyerclientid)
- [consigneeClientId](SalesOrdersServiceCreateRequest.md#consigneeclientid)
- [currencyId](SalesOrdersServiceCreateRequest.md#currencyid)
- [entityUuid](SalesOrdersServiceCreateRequest.md#entityuuid)
- [formData](SalesOrdersServiceCreateRequest.md#formdata)
- [locationId](SalesOrdersServiceCreateRequest.md#locationid)
- [miscellaneousCost](SalesOrdersServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](SalesOrdersServiceCreateRequest.md#overalldiscount)
- [paymentAdvance](SalesOrdersServiceCreateRequest.md#paymentadvance)
- [paymentCycleInDays](SalesOrdersServiceCreateRequest.md#paymentcycleindays)
- [projectId](SalesOrdersServiceCreateRequest.md#projectid)
- [referenceId](SalesOrdersServiceCreateRequest.md#referenceid)
- [roundOff](SalesOrdersServiceCreateRequest.md#roundoff)
- [userComment](SalesOrdersServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalesOrdersServiceCreateRequest.md#vaultfolderid)
- [fields](SalesOrdersServiceCreateRequest.md#fields)
- [runtime](SalesOrdersServiceCreateRequest.md#runtime)
- [typeName](SalesOrdersServiceCreateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceCreateRequest.md#clone)
- [equals](SalesOrdersServiceCreateRequest.md#equals)
- [fromBinary](SalesOrdersServiceCreateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceCreateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceCreateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceCreateRequest.md#gettype)
- [toBinary](SalesOrdersServiceCreateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceCreateRequest.md#tojson)
- [toJson](SalesOrdersServiceCreateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceCreateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceCreateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceCreateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceCreateRequest**(`data?`): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\> |

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceCreateRequest\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:506

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:441

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

src/sales_orders.scailo_pb.ts:434

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

src/sales_orders.scailo_pb.ts:455

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:406

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/sales_orders.scailo_pb.ts:504

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

src/sales_orders.scailo_pb.ts:448

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

src/sales_orders.scailo_pb.ts:469

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

src/sales_orders.scailo_pb.ts:476

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

src/sales_orders.scailo_pb.ts:490

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

src/sales_orders.scailo_pb.ts:497

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

src/sales_orders.scailo_pb.ts:462

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales order

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:427

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

src/sales_orders.scailo_pb.ts:483

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/sales_orders.scailo_pb.ts:413

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/sales_orders.scailo_pb.ts:420

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:513

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:511

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceCreateRequest"``

#### Defined in

src/sales_orders.scailo_pb.ts:512

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:543

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:531

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:535

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:539
