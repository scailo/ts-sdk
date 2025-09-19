[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceCreateRequest

# Class: SalesQuotationsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.SalesQuotationsServiceCreateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\>

  ↳ **`SalesQuotationsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceCreateRequest.md#constructor)

### Properties

- [buyerClientId](SalesQuotationsServiceCreateRequest.md#buyerclientid)
- [consigneeClientId](SalesQuotationsServiceCreateRequest.md#consigneeclientid)
- [currencyId](SalesQuotationsServiceCreateRequest.md#currencyid)
- [entityUuid](SalesQuotationsServiceCreateRequest.md#entityuuid)
- [formData](SalesQuotationsServiceCreateRequest.md#formdata)
- [locationId](SalesQuotationsServiceCreateRequest.md#locationid)
- [miscellaneousCost](SalesQuotationsServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](SalesQuotationsServiceCreateRequest.md#overalldiscount)
- [paymentAdvance](SalesQuotationsServiceCreateRequest.md#paymentadvance)
- [paymentCycleInDays](SalesQuotationsServiceCreateRequest.md#paymentcycleindays)
- [projectId](SalesQuotationsServiceCreateRequest.md#projectid)
- [referenceId](SalesQuotationsServiceCreateRequest.md#referenceid)
- [roundOff](SalesQuotationsServiceCreateRequest.md#roundoff)
- [userComment](SalesQuotationsServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalesQuotationsServiceCreateRequest.md#vaultfolderid)
- [fields](SalesQuotationsServiceCreateRequest.md#fields)
- [runtime](SalesQuotationsServiceCreateRequest.md#runtime)
- [typeName](SalesQuotationsServiceCreateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceCreateRequest.md#clone)
- [equals](SalesQuotationsServiceCreateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceCreateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceCreateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceCreateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceCreateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceCreateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceCreateRequest.md#tojson)
- [toJson](SalesQuotationsServiceCreateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceCreateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceCreateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceCreateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceCreateRequest**(`data?`): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L484)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L419)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L412)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:433](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L433)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L384)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_quotations.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L482)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/sales_quotations.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L426)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:447](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L447)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/sales_quotations.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L454)

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L468)

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:475](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L475)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L440)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales quotation

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L405)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/sales_quotations.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L461)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L391)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/sales_quotations.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L398)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L491)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L489)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceCreateRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L490)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L521)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L509)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L513)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L517)
