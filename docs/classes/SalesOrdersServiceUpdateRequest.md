[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceUpdateRequest

# Class: SalesOrdersServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.SalesOrdersServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\>

  ↳ **`SalesOrdersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceUpdateRequest.md#constructor)

### Properties

- [buyerClientId](SalesOrdersServiceUpdateRequest.md#buyerclientid)
- [consigneeClientId](SalesOrdersServiceUpdateRequest.md#consigneeclientid)
- [currencyId](SalesOrdersServiceUpdateRequest.md#currencyid)
- [formData](SalesOrdersServiceUpdateRequest.md#formdata)
- [id](SalesOrdersServiceUpdateRequest.md#id)
- [miscellaneousCost](SalesOrdersServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](SalesOrdersServiceUpdateRequest.md#notifyusers)
- [overallDiscount](SalesOrdersServiceUpdateRequest.md#overalldiscount)
- [paymentAdvance](SalesOrdersServiceUpdateRequest.md#paymentadvance)
- [paymentCycleInDays](SalesOrdersServiceUpdateRequest.md#paymentcycleindays)
- [projectId](SalesOrdersServiceUpdateRequest.md#projectid)
- [referenceId](SalesOrdersServiceUpdateRequest.md#referenceid)
- [roundOff](SalesOrdersServiceUpdateRequest.md#roundoff)
- [userComment](SalesOrdersServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesOrdersServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesOrdersServiceUpdateRequest.md#fields)
- [runtime](SalesOrdersServiceUpdateRequest.md#runtime)
- [typeName](SalesOrdersServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceUpdateRequest.md#clone)
- [equals](SalesOrdersServiceUpdateRequest.md#equals)
- [fromBinary](SalesOrdersServiceUpdateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceUpdateRequest.md#gettype)
- [toBinary](SalesOrdersServiceUpdateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceUpdateRequest.md#tojson)
- [toJson](SalesOrdersServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceUpdateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceUpdateRequest**(`data?`): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\> |

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceUpdateRequest\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:660

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:602

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

src/sales_orders.scailo_pb.ts:595

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

src/sales_orders.scailo_pb.ts:609

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/sales_orders.scailo_pb.ts:658

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/sales_orders.scailo_pb.ts:567

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

src/sales_orders.scailo_pb.ts:623

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/sales_orders.scailo_pb.ts:574

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

src/sales_orders.scailo_pb.ts:630

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

src/sales_orders.scailo_pb.ts:644

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

src/sales_orders.scailo_pb.ts:651

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

src/sales_orders.scailo_pb.ts:616

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales order

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:588

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

src/sales_orders.scailo_pb.ts:637

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:560

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/sales_orders.scailo_pb.ts:581

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:667

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:665

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceUpdateRequest"``

#### Defined in

src/sales_orders.scailo_pb.ts:666

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:697

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:685

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:689

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:693
