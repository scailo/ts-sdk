[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServiceUpdateRequest

# Class: SupplyOffersServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.SupplyOffersServiceUpdateRequest

## Hierarchy

- `Message`\<[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)\>

  ↳ **`SupplyOffersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServiceUpdateRequest.md#constructor)

### Properties

- [buyerLocationId](SupplyOffersServiceUpdateRequest.md#buyerlocationid)
- [consigneeLocationId](SupplyOffersServiceUpdateRequest.md#consigneelocationid)
- [currencyId](SupplyOffersServiceUpdateRequest.md#currencyid)
- [formData](SupplyOffersServiceUpdateRequest.md#formdata)
- [id](SupplyOffersServiceUpdateRequest.md#id)
- [miscellaneousCost](SupplyOffersServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](SupplyOffersServiceUpdateRequest.md#notifyusers)
- [overallDiscount](SupplyOffersServiceUpdateRequest.md#overalldiscount)
- [paymentAdvance](SupplyOffersServiceUpdateRequest.md#paymentadvance)
- [paymentCycleInDays](SupplyOffersServiceUpdateRequest.md#paymentcycleindays)
- [projectId](SupplyOffersServiceUpdateRequest.md#projectid)
- [referenceId](SupplyOffersServiceUpdateRequest.md#referenceid)
- [roundOff](SupplyOffersServiceUpdateRequest.md#roundoff)
- [userComment](SupplyOffersServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SupplyOffersServiceUpdateRequest.md#vaultfolderid)
- [fields](SupplyOffersServiceUpdateRequest.md#fields)
- [runtime](SupplyOffersServiceUpdateRequest.md#runtime)
- [typeName](SupplyOffersServiceUpdateRequest.md#typename)

### Methods

- [clone](SupplyOffersServiceUpdateRequest.md#clone)
- [equals](SupplyOffersServiceUpdateRequest.md#equals)
- [fromBinary](SupplyOffersServiceUpdateRequest.md#frombinary)
- [fromJson](SupplyOffersServiceUpdateRequest.md#fromjson)
- [fromJsonString](SupplyOffersServiceUpdateRequest.md#fromjsonstring)
- [getType](SupplyOffersServiceUpdateRequest.md#gettype)
- [toBinary](SupplyOffersServiceUpdateRequest.md#tobinary)
- [toJSON](SupplyOffersServiceUpdateRequest.md#tojson)
- [toJson](SupplyOffersServiceUpdateRequest.md#tojson-1)
- [toJsonString](SupplyOffersServiceUpdateRequest.md#tojsonstring)
- [equals](SupplyOffersServiceUpdateRequest.md#equals-1)
- [fromBinary](SupplyOffersServiceUpdateRequest.md#frombinary-1)
- [fromJson](SupplyOffersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SupplyOffersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServiceUpdateRequest**(`data?`): [`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)\> |

#### Returns

[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

#### Overrides

Message\&lt;SupplyOffersServiceUpdateRequest\&gt;.constructor

#### Defined in

src/supply_offers.scailo_pb.ts:582

## Properties

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The location ID of the buyer

**`Generated`**

from field: uint64 buyer_location_id = 13;

#### Defined in

src/supply_offers.scailo_pb.ts:524

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The location ID of the consignee

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

src/supply_offers.scailo_pb.ts:517

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

src/supply_offers.scailo_pb.ts:531

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/supply_offers.scailo_pb.ts:580

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/supply_offers.scailo_pb.ts:489

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

src/supply_offers.scailo_pb.ts:545

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/supply_offers.scailo_pb.ts:496

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

src/supply_offers.scailo_pb.ts:552

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

src/supply_offers.scailo_pb.ts:566

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

src/supply_offers.scailo_pb.ts:573

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

src/supply_offers.scailo_pb.ts:538

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the supply offer

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/supply_offers.scailo_pb.ts:510

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

src/supply_offers.scailo_pb.ts:559

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/supply_offers.scailo_pb.ts:482

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/supply_offers.scailo_pb.ts:503

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/supply_offers.scailo_pb.ts:589

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/supply_offers.scailo_pb.ts:587

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceUpdateRequest"``

#### Defined in

src/supply_offers.scailo_pb.ts:588

## Methods

### clone

▸ **clone**(): [`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/supply_offers.scailo_pb.ts:619

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

#### Defined in

src/supply_offers.scailo_pb.ts:607

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

#### Defined in

src/supply_offers.scailo_pb.ts:611

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceUpdateRequest`](SupplyOffersServiceUpdateRequest.md)

#### Defined in

src/supply_offers.scailo_pb.ts:615
