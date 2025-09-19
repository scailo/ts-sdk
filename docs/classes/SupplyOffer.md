[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffer

# Class: SupplyOffer

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.SupplyOffer

## Hierarchy

- `Message`\<[`SupplyOffer`](SupplyOffer.md)\>

  ↳ **`SupplyOffer`**

## Table of contents

### Constructors

- [constructor](SupplyOffer.md#constructor)

### Properties

- [amendmentCount](SupplyOffer.md#amendmentcount)
- [approvalMetadata](SupplyOffer.md#approvalmetadata)
- [buyerLocationId](SupplyOffer.md#buyerlocationid)
- [completedOn](SupplyOffer.md#completedon)
- [consigneeLocationId](SupplyOffer.md#consigneelocationid)
- [currencyId](SupplyOffer.md#currencyid)
- [entityUuid](SupplyOffer.md#entityuuid)
- [finalRefNumber](SupplyOffer.md#finalrefnumber)
- [formData](SupplyOffer.md#formdata)
- [list](SupplyOffer.md#list)
- [logs](SupplyOffer.md#logs)
- [metadata](SupplyOffer.md#metadata)
- [miscellaneousCost](SupplyOffer.md#miscellaneouscost)
- [overallDiscount](SupplyOffer.md#overalldiscount)
- [paymentAdvance](SupplyOffer.md#paymentadvance)
- [paymentCycleInDays](SupplyOffer.md#paymentcycleindays)
- [projectId](SupplyOffer.md#projectid)
- [referenceId](SupplyOffer.md#referenceid)
- [roundOff](SupplyOffer.md#roundoff)
- [status](SupplyOffer.md#status)
- [totalValue](SupplyOffer.md#totalvalue)
- [vaultFolderId](SupplyOffer.md#vaultfolderid)
- [vendorId](SupplyOffer.md#vendorid)
- [fields](SupplyOffer.md#fields)
- [runtime](SupplyOffer.md#runtime)
- [typeName](SupplyOffer.md#typename)

### Methods

- [clone](SupplyOffer.md#clone)
- [equals](SupplyOffer.md#equals)
- [fromBinary](SupplyOffer.md#frombinary)
- [fromJson](SupplyOffer.md#fromjson)
- [fromJsonString](SupplyOffer.md#fromjsonstring)
- [getType](SupplyOffer.md#gettype)
- [toBinary](SupplyOffer.md#tobinary)
- [toJSON](SupplyOffer.md#tojson)
- [toJson](SupplyOffer.md#tojson-1)
- [toJsonString](SupplyOffer.md#tojsonstring)
- [equals](SupplyOffer.md#equals-1)
- [fromBinary](SupplyOffer.md#frombinary-1)
- [fromJson](SupplyOffer.md#fromjson-1)
- [fromJsonString](SupplyOffer.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffer**(`data?`): [`SupplyOffer`](SupplyOffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffer`](SupplyOffer.md)\> |

#### Returns

[`SupplyOffer`](SupplyOffer.md)

#### Overrides

Message\&lt;SupplyOffer\&gt;.constructor

#### Defined in

[src/supply_offers.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L908)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

The number of times that the supply offer has been amended

**`Generated`**

from field: uint64 amendment_count = 22;

#### Defined in

[src/supply_offers.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L885)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/supply_offers.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L766)

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The location ID of the buyer

**`Generated`**

from field: uint64 buyer_location_id = 13;

#### Defined in

[src/supply_offers.scailo_pb.ts:822](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L822)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this supply offer was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/supply_offers.scailo_pb.ts:787](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L787)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The location ID of the consignee

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

[src/supply_offers.scailo_pb.ts:815](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L815)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/supply_offers.scailo_pb.ts:836](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L836)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/supply_offers.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L752)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/supply_offers.scailo_pb.ts:808](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L808)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 50;

#### Defined in

[src/supply_offers.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L906)

___

### list

• **list**: [`SupplyOfferItem`](SupplyOfferItem.md)[] = `[]`

The list of associated supply offer items

**`Generated`**

from field: repeated Scailo.SupplyOfferItem list = 40;

#### Defined in

[src/supply_offers.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L899)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this supply offer

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/supply_offers.scailo_pb.ts:780](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L780)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this supply offer

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/supply_offers.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L759)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/supply_offers.scailo_pb.ts:850](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L850)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/supply_offers.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L857)

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

[src/supply_offers.scailo_pb.ts:871](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L871)

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

[src/supply_offers.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L878)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/supply_offers.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L843)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the supply offer

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/supply_offers.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L801)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/supply_offers.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L864)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this supply offer

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/supply_offers.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L773)

___

### totalValue

• **totalValue**: `number` = `0`

Stores the total value of the supply offer (as a double, which requires no adjustments)

**`Generated`**

from field: double total_value = 30;

#### Defined in

[src/supply_offers.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L892)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/supply_offers.scailo_pb.ts:794](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L794)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 14;

#### Defined in

[src/supply_offers.scailo_pb.ts:829](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L829)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L915)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:913](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L913)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffer"``

#### Defined in

[src/supply_offers.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L914)

## Methods

### clone

▸ **clone**(): [`SupplyOffer`](SupplyOffer.md)

Create a deep copy.

#### Returns

[`SupplyOffer`](SupplyOffer.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffer`](SupplyOffer.md) \| `PlainMessage`\<[`SupplyOffer`](SupplyOffer.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffer`](SupplyOffer.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffer`](SupplyOffer.md)\>

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
| `a` | `undefined` \| [`SupplyOffer`](SupplyOffer.md) \| `PlainMessage`\<[`SupplyOffer`](SupplyOffer.md)\> |
| `b` | `undefined` \| [`SupplyOffer`](SupplyOffer.md) \| `PlainMessage`\<[`SupplyOffer`](SupplyOffer.md)\> |

#### Returns

`boolean`

#### Defined in

[src/supply_offers.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L953)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffer`](SupplyOffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffer`](SupplyOffer.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:941](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L941)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffer`](SupplyOffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffer`](SupplyOffer.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L945)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffer`](SupplyOffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffer`](SupplyOffer.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:949](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/supply_offers.scailo_pb.ts#L949)
