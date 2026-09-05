[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceCreateRequest

# Class: SalesEnquiriesServiceCreateRequest

Request message for defining and creating a new Sales Enquiry within the system.
A Sales Enquiry represents an inbound request or lead from a prospective or existing customer
(e.g., submitted via a website contact form or direct communication). It captures the initial
interest in products or services, allowing sales teams to track, analyze, and subsequently respond
to the prospect.

**Note:** This record serves as the earliest stage in the outbound sales pipeline, often acting
as the precursor to a formal Sales Quotation or Sales Order.

**`Generated`**

from message Scailo.SalesEnquiriesServiceCreateRequest

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\>

  ↳ **`SalesEnquiriesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceCreateRequest.md#constructor)

### Properties

- [buyerClientId](SalesEnquiriesServiceCreateRequest.md#buyerclientid)
- [consigneeClientId](SalesEnquiriesServiceCreateRequest.md#consigneeclientid)
- [currencyId](SalesEnquiriesServiceCreateRequest.md#currencyid)
- [description](SalesEnquiriesServiceCreateRequest.md#description)
- [entityUuid](SalesEnquiriesServiceCreateRequest.md#entityuuid)
- [formData](SalesEnquiriesServiceCreateRequest.md#formdata)
- [miscellaneousCost](SalesEnquiriesServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](SalesEnquiriesServiceCreateRequest.md#overalldiscount)
- [referenceId](SalesEnquiriesServiceCreateRequest.md#referenceid)
- [roundOff](SalesEnquiriesServiceCreateRequest.md#roundoff)
- [userComment](SalesEnquiriesServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalesEnquiriesServiceCreateRequest.md#vaultfolderid)
- [fields](SalesEnquiriesServiceCreateRequest.md#fields)
- [runtime](SalesEnquiriesServiceCreateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceCreateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceCreateRequest.md#clone)
- [equals](SalesEnquiriesServiceCreateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceCreateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceCreateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceCreateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceCreateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceCreateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceCreateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceCreateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceCreateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceCreateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceCreateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceCreateRequest**(`data?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L456)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).

**`Example`**

```ts
1051
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L360)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).

**`Example`**

```ts
1050
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L344)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the currency associated with the enquiry, used to frame any prospective financial discussions or quotes.

**`Example`**

```ts
3
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L376)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

A textual summary detailing the specific products, services, or information the lead is requesting.

**`Example`**

```ts
"Looking for bulk pricing on industrial copper wiring"
```

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: optional string description = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L392)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:280](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L280)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L454)

___

### miscellaneousCost

• `Optional` **miscellaneousCost**: `bigint`

**`Optional`**

**`Description`**

Any additional miscellaneous costs (e.g., estimated handling or freight charges) tentatively associated with the enquiry, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:408](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L408)

___

### overallDiscount

• `Optional` **overallDiscount**: `bigint`

**`Optional`**

**`Description`**

A flat target discount amount associated with the enquiry, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 overall_discount = 18;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:424](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L424)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L328)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount for prospective financial totals. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Regex`**

^-?[0-9]+$

**`Format`**

Signed 64-bit integer.

**`Generated`**

from field: optional int64 round_off = 19;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L440)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L296)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L312)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:463](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L463)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L461)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceCreateRequest"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L462)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L490)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L478)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L482)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L486)
