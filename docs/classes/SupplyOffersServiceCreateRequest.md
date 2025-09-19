[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServiceCreateRequest

# Class: SupplyOffersServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.SupplyOffersServiceCreateRequest

## Hierarchy

- `Message`\<[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)\>

  ↳ **`SupplyOffersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServiceCreateRequest.md#constructor)

### Properties

- [buyerLocationId](SupplyOffersServiceCreateRequest.md#buyerlocationid)
- [consigneeLocationId](SupplyOffersServiceCreateRequest.md#consigneelocationid)
- [currencyId](SupplyOffersServiceCreateRequest.md#currencyid)
- [entityUuid](SupplyOffersServiceCreateRequest.md#entityuuid)
- [formData](SupplyOffersServiceCreateRequest.md#formdata)
- [miscellaneousCost](SupplyOffersServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](SupplyOffersServiceCreateRequest.md#overalldiscount)
- [paymentAdvance](SupplyOffersServiceCreateRequest.md#paymentadvance)
- [paymentCycleInDays](SupplyOffersServiceCreateRequest.md#paymentcycleindays)
- [projectId](SupplyOffersServiceCreateRequest.md#projectid)
- [referenceId](SupplyOffersServiceCreateRequest.md#referenceid)
- [roundOff](SupplyOffersServiceCreateRequest.md#roundoff)
- [userComment](SupplyOffersServiceCreateRequest.md#usercomment)
- [vaultFolderId](SupplyOffersServiceCreateRequest.md#vaultfolderid)
- [vendorId](SupplyOffersServiceCreateRequest.md#vendorid)
- [fields](SupplyOffersServiceCreateRequest.md#fields)
- [runtime](SupplyOffersServiceCreateRequest.md#runtime)
- [typeName](SupplyOffersServiceCreateRequest.md#typename)

### Methods

- [clone](SupplyOffersServiceCreateRequest.md#clone)
- [equals](SupplyOffersServiceCreateRequest.md#equals)
- [fromBinary](SupplyOffersServiceCreateRequest.md#frombinary)
- [fromJson](SupplyOffersServiceCreateRequest.md#fromjson)
- [fromJsonString](SupplyOffersServiceCreateRequest.md#fromjsonstring)
- [getType](SupplyOffersServiceCreateRequest.md#gettype)
- [toBinary](SupplyOffersServiceCreateRequest.md#tobinary)
- [toJSON](SupplyOffersServiceCreateRequest.md#tojson)
- [toJson](SupplyOffersServiceCreateRequest.md#tojson-1)
- [toJsonString](SupplyOffersServiceCreateRequest.md#tojsonstring)
- [equals](SupplyOffersServiceCreateRequest.md#equals-1)
- [fromBinary](SupplyOffersServiceCreateRequest.md#frombinary-1)
- [fromJson](SupplyOffersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SupplyOffersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServiceCreateRequest**(`data?`): [`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)\> |

#### Returns

[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

#### Overrides

Message\&lt;SupplyOffersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/supply_offers.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L428)

## Properties

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The location ID of the buyer

**`Generated`**

from field: uint64 buyer_location_id = 13;

#### Defined in

[src/supply_offers.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L363)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The location ID of the consignee

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

[src/supply_offers.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L356)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/supply_offers.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L377)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/supply_offers.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L328)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/supply_offers.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L426)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/supply_offers.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L391)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/supply_offers.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L398)

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

[src/supply_offers.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L412)

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

[src/supply_offers.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L419)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/supply_offers.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L384)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the supply offer

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/supply_offers.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L349)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/supply_offers.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L405)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/supply_offers.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L335)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/supply_offers.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L342)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 14;

#### Defined in

[src/supply_offers.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L370)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:435](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L435)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:433](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L433)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceCreateRequest"``

#### Defined in

[src/supply_offers.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L434)

## Methods

### clone

▸ **clone**(): [`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md) \| `PlainMessage`\<[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/supply_offers.scailo_pb.ts:465](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L465)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:453](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L453)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L457)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceCreateRequest`](SupplyOffersServiceCreateRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L461)
