[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceUpdateRequest

# Class: SalesEnquiriesServiceUpdateRequest

Request message for updating an existing Sales Enquiry record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the references, consignee & buyer, currency, costs & discounts, and other custom form fields
of an established Sales Enquiry.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.SalesEnquiriesServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\>

  ↳ **`SalesEnquiriesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceUpdateRequest.md#constructor)

### Properties

- [buyerClientId](SalesEnquiriesServiceUpdateRequest.md#buyerclientid)
- [consigneeClientId](SalesEnquiriesServiceUpdateRequest.md#consigneeclientid)
- [currencyId](SalesEnquiriesServiceUpdateRequest.md#currencyid)
- [description](SalesEnquiriesServiceUpdateRequest.md#description)
- [formData](SalesEnquiriesServiceUpdateRequest.md#formdata)
- [id](SalesEnquiriesServiceUpdateRequest.md#id)
- [miscellaneousCost](SalesEnquiriesServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](SalesEnquiriesServiceUpdateRequest.md#notifyusers)
- [overallDiscount](SalesEnquiriesServiceUpdateRequest.md#overalldiscount)
- [referenceId](SalesEnquiriesServiceUpdateRequest.md#referenceid)
- [roundOff](SalesEnquiriesServiceUpdateRequest.md#roundoff)
- [userComment](SalesEnquiriesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesEnquiriesServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesEnquiriesServiceUpdateRequest.md#fields)
- [runtime](SalesEnquiriesServiceUpdateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceUpdateRequest.md#clone)
- [equals](SalesEnquiriesServiceUpdateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceUpdateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceUpdateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceUpdateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceUpdateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceUpdateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceUpdateRequest**(`data?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\> |

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L710)

## Properties

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

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

from field: optional uint64 buyer_client_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:614](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L614)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

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

from field: optional uint64 consignee_client_id = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L598)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

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

from field: optional uint64 currency_id = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:630](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L630)

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

[src/sales_enquiries.scailo_pb.ts:646](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L646)

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

[src/sales_enquiries.scailo_pb.ts:708](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L708)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L538)

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

[src/sales_enquiries.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L662)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L550)

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

[src/sales_enquiries.scailo_pb.ts:678](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L678)

___

### referenceId

• `Optional` **referenceId**: `string`

**`Optional`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: optional string reference_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L582)

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

[src/sales_enquiries.scailo_pb.ts:694](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L694)

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

from field: optional string user_comment = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L522)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L566)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L717)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:715](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L715)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceUpdateRequest"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:716](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L716)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L745)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L733)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L737)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L741)
