[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceCreateRequest

# Class: QuotationsResponsesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.QuotationsResponsesServiceCreateRequest

## Hierarchy

- `Message`\<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\>

  ↳ **`QuotationsResponsesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceCreateRequest.md#constructor)

### Properties

- [currencyId](QuotationsResponsesServiceCreateRequest.md#currencyid)
- [description](QuotationsResponsesServiceCreateRequest.md#description)
- [entityUuid](QuotationsResponsesServiceCreateRequest.md#entityuuid)
- [formData](QuotationsResponsesServiceCreateRequest.md#formdata)
- [quotationRequestId](QuotationsResponsesServiceCreateRequest.md#quotationrequestid)
- [refFrom](QuotationsResponsesServiceCreateRequest.md#reffrom)
- [refId](QuotationsResponsesServiceCreateRequest.md#refid)
- [referenceId](QuotationsResponsesServiceCreateRequest.md#referenceid)
- [userComment](QuotationsResponsesServiceCreateRequest.md#usercomment)
- [vaultFolderId](QuotationsResponsesServiceCreateRequest.md#vaultfolderid)
- [fields](QuotationsResponsesServiceCreateRequest.md#fields)
- [runtime](QuotationsResponsesServiceCreateRequest.md#runtime)
- [typeName](QuotationsResponsesServiceCreateRequest.md#typename)

### Methods

- [clone](QuotationsResponsesServiceCreateRequest.md#clone)
- [equals](QuotationsResponsesServiceCreateRequest.md#equals)
- [fromBinary](QuotationsResponsesServiceCreateRequest.md#frombinary)
- [fromJson](QuotationsResponsesServiceCreateRequest.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceCreateRequest.md#fromjsonstring)
- [getType](QuotationsResponsesServiceCreateRequest.md#gettype)
- [toBinary](QuotationsResponsesServiceCreateRequest.md#tobinary)
- [toJSON](QuotationsResponsesServiceCreateRequest.md#tojson)
- [toJson](QuotationsResponsesServiceCreateRequest.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceCreateRequest.md#tojsonstring)
- [equals](QuotationsResponsesServiceCreateRequest.md#equals-1)
- [fromBinary](QuotationsResponsesServiceCreateRequest.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceCreateRequest**(`data?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\> |

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Overrides

Message\&lt;QuotationsResponsesServiceCreateRequest\&gt;.constructor

#### Defined in

src/quotations_responses.scailo_pb.ts:305

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

src/quotations_responses.scailo_pb.ts:289

___

### description

• **description**: `string` = `""`

The description of the quotation response

**`Generated`**

from field: string description = 16;

#### Defined in

src/quotations_responses.scailo_pb.ts:296

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/quotations_responses.scailo_pb.ts:240

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/quotations_responses.scailo_pb.ts:303

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

The associated quotation request

**`Generated`**

from field: uint64 quotation_request_id = 12;

#### Defined in

src/quotations_responses.scailo_pb.ts:268

___

### refFrom

• **refFrom**: `string` = `""`

The associated party type

**`Generated`**

from field: string ref_from = 13;

#### Defined in

src/quotations_responses.scailo_pb.ts:275

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated party ID

**`Generated`**

from field: uint64 ref_id = 14;

#### Defined in

src/quotations_responses.scailo_pb.ts:282

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation response

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/quotations_responses.scailo_pb.ts:261

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/quotations_responses.scailo_pb.ts:247

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/quotations_responses.scailo_pb.ts:254

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_responses.scailo_pb.ts:312

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_responses.scailo_pb.ts:310

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesServiceCreateRequest"``

#### Defined in

src/quotations_responses.scailo_pb.ts:311

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md) \| `PlainMessage`\<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md) \| `PlainMessage`\<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md) \| `PlainMessage`\<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_responses.scailo_pb.ts:337

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:325

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:329

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:333
