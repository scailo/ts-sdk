[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceUpdateRequest

# Class: SalesEnquiriesServiceUpdateRequest

Describes the parameters necessary to update a record

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
- [priority](SalesEnquiriesServiceUpdateRequest.md#priority)
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

[src/sales_enquiries.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L553)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L502)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L495)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:516](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L516)

___

### description

• **description**: `string` = `""`

The description of the sales enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L523)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:551](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L551)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:444](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L444)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

The miscellaneous cost (in cents)

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:530](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L530)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L456)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The overall discount (in cents)

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L537)

___

### priority

• **priority**: `string` = `""`

The priority of the sales enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L509)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

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

from field: string reference_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L488)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off amount (in cents) (both positive and negative values are allowed)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:544](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L544)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:437](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L437)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

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

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L472)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:560](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L560)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:558](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L558)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceUpdateRequest"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L559)

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

[src/sales_enquiries.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L589)

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

[src/sales_enquiries.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L577)

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

[src/sales_enquiries.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L581)

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

[src/sales_enquiries.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L585)
