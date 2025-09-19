[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotation

# Class: SalesQuotation

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.SalesQuotation

## Hierarchy

- `Message`\<[`SalesQuotation`](SalesQuotation.md)\>

  ↳ **`SalesQuotation`**

## Table of contents

### Constructors

- [constructor](SalesQuotation.md#constructor)

### Properties

- [amendmentCount](SalesQuotation.md#amendmentcount)
- [approvalMetadata](SalesQuotation.md#approvalmetadata)
- [buyerClientId](SalesQuotation.md#buyerclientid)
- [completedOn](SalesQuotation.md#completedon)
- [consigneeClientId](SalesQuotation.md#consigneeclientid)
- [currencyId](SalesQuotation.md#currencyid)
- [entityUuid](SalesQuotation.md#entityuuid)
- [finalRefNumber](SalesQuotation.md#finalrefnumber)
- [formData](SalesQuotation.md#formdata)
- [list](SalesQuotation.md#list)
- [locationId](SalesQuotation.md#locationid)
- [logs](SalesQuotation.md#logs)
- [metadata](SalesQuotation.md#metadata)
- [miscellaneousCost](SalesQuotation.md#miscellaneouscost)
- [overallDiscount](SalesQuotation.md#overalldiscount)
- [paymentAdvance](SalesQuotation.md#paymentadvance)
- [paymentCycleInDays](SalesQuotation.md#paymentcycleindays)
- [projectId](SalesQuotation.md#projectid)
- [referenceId](SalesQuotation.md#referenceid)
- [roundOff](SalesQuotation.md#roundoff)
- [status](SalesQuotation.md#status)
- [totalValue](SalesQuotation.md#totalvalue)
- [vaultFolderId](SalesQuotation.md#vaultfolderid)
- [fields](SalesQuotation.md#fields)
- [runtime](SalesQuotation.md#runtime)
- [typeName](SalesQuotation.md#typename)

### Methods

- [clone](SalesQuotation.md#clone)
- [equals](SalesQuotation.md#equals)
- [fromBinary](SalesQuotation.md#frombinary)
- [fromJson](SalesQuotation.md#fromjson)
- [fromJsonString](SalesQuotation.md#fromjsonstring)
- [getType](SalesQuotation.md#gettype)
- [toBinary](SalesQuotation.md#tobinary)
- [toJSON](SalesQuotation.md#tojson)
- [toJson](SalesQuotation.md#tojson-1)
- [toJsonString](SalesQuotation.md#tojsonstring)
- [equals](SalesQuotation.md#equals-1)
- [fromBinary](SalesQuotation.md#frombinary-1)
- [fromJson](SalesQuotation.md#fromjson-1)
- [fromJsonString](SalesQuotation.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotation**(`data?`): [`SalesQuotation`](SalesQuotation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotation`](SalesQuotation.md)\> |

#### Returns

[`SalesQuotation`](SalesQuotation.md)

#### Overrides

Message\&lt;SalesQuotation\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L898)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

The number of times that the sales quotation has been amended

**`Generated`**

from field: uint64 amendment_count = 22;

#### Defined in

[src/sales_quotations.scailo_pb.ts:875](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L875)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_quotations.scailo_pb.ts:756](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L756)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L812)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this sales quotation was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/sales_quotations.scailo_pb.ts:777](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L777)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:805](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L805)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:826](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L826)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:742](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L742)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/sales_quotations.scailo_pb.ts:798](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L798)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 50;

#### Defined in

[src/sales_quotations.scailo_pb.ts:896](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L896)

___

### list

• **list**: [`SalesQuotationItem`](SalesQuotationItem.md)[] = `[]`

The list of associated sales quotation items

**`Generated`**

from field: repeated Scailo.SalesQuotationItem list = 40;

#### Defined in

[src/sales_quotations.scailo_pb.ts:889](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L889)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/sales_quotations.scailo_pb.ts:819](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L819)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this sales quotation

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_quotations.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L770)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales quotation

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:749](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L749)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:840](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L840)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/sales_quotations.scailo_pb.ts:847](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L847)

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:861](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L861)

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L868)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:833](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L833)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales quotation

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:791](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L791)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/sales_quotations.scailo_pb.ts:854](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L854)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales quotation

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_quotations.scailo_pb.ts:763](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L763)

___

### totalValue

• **totalValue**: `number` = `0`

Stores the total value of the sales quotation (as a double, which requires no adjustments)

**`Generated`**

from field: double total_value = 30;

#### Defined in

[src/sales_quotations.scailo_pb.ts:882](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L882)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/sales_quotations.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L784)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:905](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L905)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L903)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotation"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:904](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L904)

## Methods

### clone

▸ **clone**(): [`SalesQuotation`](SalesQuotation.md)

Create a deep copy.

#### Returns

[`SalesQuotation`](SalesQuotation.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotation`](SalesQuotation.md) \| `PlainMessage`\<[`SalesQuotation`](SalesQuotation.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotation`](SalesQuotation.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotation`](SalesQuotation.md)\>

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
| `a` | `undefined` \| [`SalesQuotation`](SalesQuotation.md) \| `PlainMessage`\<[`SalesQuotation`](SalesQuotation.md)\> |
| `b` | `undefined` \| [`SalesQuotation`](SalesQuotation.md) \| `PlainMessage`\<[`SalesQuotation`](SalesQuotation.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L943)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotation`](SalesQuotation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotation`](SalesQuotation.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L931)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotation`](SalesQuotation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotation`](SalesQuotation.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:935](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L935)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotation`](SalesQuotation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotation`](SalesQuotation.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L939)
