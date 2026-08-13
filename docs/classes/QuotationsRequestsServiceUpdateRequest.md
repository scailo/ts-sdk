[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceUpdateRequest

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

[src/quotations_requests.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L525)

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/quotations_requests.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L488)

___

### description

• **description**: `string` = `""`

The description of the quotation request

**`Generated`**

from field: string description = 17;

#### Defined in

[src/quotations_requests.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L509)

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

[src/quotations_requests.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L523)

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

[src/quotations_requests.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L430)

___

### lastDate

• **lastDate**: `string` = `""`

The date until which quotations responses can be sent

**`Generated`**

from field: string last_date = 13;

#### Defined in

[src/quotations_requests.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L481)

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

[src/quotations_requests.scailo_pb.ts:442](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L442)

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 16;

#### Defined in

[src/quotations_requests.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L502)

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

[src/quotations_requests.scailo_pb.ts:474](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L474)

___

### renewalPeriod

• **renewalPeriod**: `bigint` = `protoInt64.zero`

The number of days until which the quotation request is valid

**`Generated`**

from field: uint64 renewal_period = 15;

#### Defined in

[src/quotations_requests.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L495)

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

from field: string user_comment = 1;

#### Defined in

[src/quotations_requests.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L414)

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

[src/quotations_requests.scailo_pb.ts:458](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L458)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L532)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests.scailo_pb.ts:530](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L530)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServiceUpdateRequest"``

#### Defined in

[src/quotations_requests.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L531)

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

[src/quotations_requests.scailo_pb.ts:558](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L558)

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

[src/quotations_requests.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L546)

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

[src/quotations_requests.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L550)

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

[src/quotations_requests.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L554)
