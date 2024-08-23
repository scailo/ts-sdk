[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceUpdateRequest

# Class: QuotationsRequestsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.QuotationsRequestsServiceUpdateRequest

## Hierarchy

- `Message`\<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\>

  ↳ **`QuotationsRequestsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceUpdateRequest.md#constructor)

### Properties

- [currencyId](QuotationsRequestsServiceUpdateRequest.md#currencyid)
- [description](QuotationsRequestsServiceUpdateRequest.md#description)
- [formData](QuotationsRequestsServiceUpdateRequest.md#formdata)
- [id](QuotationsRequestsServiceUpdateRequest.md#id)
- [lastDate](QuotationsRequestsServiceUpdateRequest.md#lastdate)
- [notifyUsers](QuotationsRequestsServiceUpdateRequest.md#notifyusers)
- [priority](QuotationsRequestsServiceUpdateRequest.md#priority)
- [referenceId](QuotationsRequestsServiceUpdateRequest.md#referenceid)
- [renewalPeriod](QuotationsRequestsServiceUpdateRequest.md#renewalperiod)
- [userComment](QuotationsRequestsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](QuotationsRequestsServiceUpdateRequest.md#vaultfolderid)
- [fields](QuotationsRequestsServiceUpdateRequest.md#fields)
- [runtime](QuotationsRequestsServiceUpdateRequest.md#runtime)
- [typeName](QuotationsRequestsServiceUpdateRequest.md#typename)

### Methods

- [clone](QuotationsRequestsServiceUpdateRequest.md#clone)
- [equals](QuotationsRequestsServiceUpdateRequest.md#equals)
- [fromBinary](QuotationsRequestsServiceUpdateRequest.md#frombinary)
- [fromJson](QuotationsRequestsServiceUpdateRequest.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceUpdateRequest.md#fromjsonstring)
- [getType](QuotationsRequestsServiceUpdateRequest.md#gettype)
- [toBinary](QuotationsRequestsServiceUpdateRequest.md#tobinary)
- [toJSON](QuotationsRequestsServiceUpdateRequest.md#tojson)
- [toJson](QuotationsRequestsServiceUpdateRequest.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceUpdateRequest.md#tojsonstring)
- [equals](QuotationsRequestsServiceUpdateRequest.md#equals-1)
- [fromBinary](QuotationsRequestsServiceUpdateRequest.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceUpdateRequest**(`data?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\> |

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Overrides

Message\&lt;QuotationsRequestsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:434

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

src/quotations_requests.scailo_pb.ts:404

___

### description

• **description**: `string` = `""`

The description of the quotation request

**`Generated`**

from field: string description = 17;

#### Defined in

src/quotations_requests.scailo_pb.ts:425

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/quotations_requests.scailo_pb.ts:432

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/quotations_requests.scailo_pb.ts:369

___

### lastDate

• **lastDate**: `string` = `""`

The date until which quotations responses can be sent

**`Generated`**

from field: string last_date = 13;

#### Defined in

src/quotations_requests.scailo_pb.ts:397

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/quotations_requests.scailo_pb.ts:376

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 16;

#### Defined in

src/quotations_requests.scailo_pb.ts:418

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation request

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/quotations_requests.scailo_pb.ts:390

___

### renewalPeriod

• **renewalPeriod**: `bigint` = `protoInt64.zero`

The number of days until which the quotation request is valid

**`Generated`**

from field: uint64 renewal_period = 15;

#### Defined in

src/quotations_requests.scailo_pb.ts:411

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/quotations_requests.scailo_pb.ts:362

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/quotations_requests.scailo_pb.ts:383

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:441

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:439

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServiceUpdateRequest"``

#### Defined in

src/quotations_requests.scailo_pb.ts:440

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:467

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:455

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:459

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:463
