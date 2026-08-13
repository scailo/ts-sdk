[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceCreateRequest

# Class: QuotationsRequestsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.QuotationsRequestsServiceCreateRequest

## Hierarchy

- `Message`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\>

  ↳ **`QuotationsRequestsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceCreateRequest.md#constructor)

### Properties

- [currencyId](QuotationsRequestsServiceCreateRequest.md#currencyid)
- [description](QuotationsRequestsServiceCreateRequest.md#description)
- [entityUuid](QuotationsRequestsServiceCreateRequest.md#entityuuid)
- [formData](QuotationsRequestsServiceCreateRequest.md#formdata)
- [lastDate](QuotationsRequestsServiceCreateRequest.md#lastdate)
- [priority](QuotationsRequestsServiceCreateRequest.md#priority)
- [purchaseEnquiryId](QuotationsRequestsServiceCreateRequest.md#purchaseenquiryid)
- [referenceId](QuotationsRequestsServiceCreateRequest.md#referenceid)
- [renewalPeriod](QuotationsRequestsServiceCreateRequest.md#renewalperiod)
- [userComment](QuotationsRequestsServiceCreateRequest.md#usercomment)
- [vaultFolderId](QuotationsRequestsServiceCreateRequest.md#vaultfolderid)
- [fields](QuotationsRequestsServiceCreateRequest.md#fields)
- [runtime](QuotationsRequestsServiceCreateRequest.md#runtime)
- [typeName](QuotationsRequestsServiceCreateRequest.md#typename)

### Methods

- [clone](QuotationsRequestsServiceCreateRequest.md#clone)
- [equals](QuotationsRequestsServiceCreateRequest.md#equals)
- [fromBinary](QuotationsRequestsServiceCreateRequest.md#frombinary)
- [fromJson](QuotationsRequestsServiceCreateRequest.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceCreateRequest.md#fromjsonstring)
- [getType](QuotationsRequestsServiceCreateRequest.md#gettype)
- [toBinary](QuotationsRequestsServiceCreateRequest.md#tobinary)
- [toJSON](QuotationsRequestsServiceCreateRequest.md#tojson)
- [toJson](QuotationsRequestsServiceCreateRequest.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceCreateRequest.md#tojsonstring)
- [equals](QuotationsRequestsServiceCreateRequest.md#equals-1)
- [fromBinary](QuotationsRequestsServiceCreateRequest.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceCreateRequest**(`data?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Overrides

Message\&lt;QuotationsRequestsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/quotations_requests.scailo_pb.ts:355](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L355)

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/quotations_requests.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L318)

___

### description

• **description**: `string` = `""`

The description of the quotation request

**`Generated`**

from field: string description = 17;

#### Defined in

[src/quotations_requests.scailo_pb.ts:339](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L339)

___

### entityUuid

• **entityUuid**: `string` = `""`

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

from field: string entity_uuid = 1;

#### Defined in

[src/quotations_requests.scailo_pb.ts:249](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L249)

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

[src/quotations_requests.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L353)

___

### lastDate

• **lastDate**: `string` = `""`

The date until which quotations responses can be sent

**`Generated`**

from field: string last_date = 13;

#### Defined in

[src/quotations_requests.scailo_pb.ts:311](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L311)

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 16;

#### Defined in

[src/quotations_requests.scailo_pb.ts:332](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L332)

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

The associated purchase enquiry

**`Generated`**

from field: uint64 purchase_enquiry_id = 12;

#### Defined in

[src/quotations_requests.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L304)

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

[src/quotations_requests.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L297)

___

### renewalPeriod

• **renewalPeriod**: `bigint` = `protoInt64.zero`

The number of days until which the quotation request is valid

**`Generated`**

from field: uint64 renewal_period = 15;

#### Defined in

[src/quotations_requests.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L325)

___

### userComment

• **userComment**: `string` = `""`

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

from field: string user_comment = 2;

#### Defined in

[src/quotations_requests.scailo_pb.ts:265](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L265)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

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

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/quotations_requests.scailo_pb.ts:281](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L281)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L362)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L360)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServiceCreateRequest"``

#### Defined in

[src/quotations_requests.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L361)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L388)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L376)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:380](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L380)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_requests.scailo_pb.ts#L384)
