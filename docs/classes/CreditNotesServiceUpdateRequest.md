[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceUpdateRequest

# Class: CreditNotesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.CreditNotesServiceUpdateRequest

## Hierarchy

- `Message`\<[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)\>

  ↳ **`CreditNotesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceUpdateRequest.md#constructor)

### Properties

- [bankAccountId](CreditNotesServiceUpdateRequest.md#bankaccountid)
- [currencyId](CreditNotesServiceUpdateRequest.md#currencyid)
- [formData](CreditNotesServiceUpdateRequest.md#formdata)
- [id](CreditNotesServiceUpdateRequest.md#id)
- [miscellaneousCost](CreditNotesServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](CreditNotesServiceUpdateRequest.md#notifyusers)
- [overallDiscount](CreditNotesServiceUpdateRequest.md#overalldiscount)
- [referenceId](CreditNotesServiceUpdateRequest.md#referenceid)
- [roundOff](CreditNotesServiceUpdateRequest.md#roundoff)
- [userComment](CreditNotesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](CreditNotesServiceUpdateRequest.md#vaultfolderid)
- [fields](CreditNotesServiceUpdateRequest.md#fields)
- [runtime](CreditNotesServiceUpdateRequest.md#runtime)
- [typeName](CreditNotesServiceUpdateRequest.md#typename)

### Methods

- [clone](CreditNotesServiceUpdateRequest.md#clone)
- [equals](CreditNotesServiceUpdateRequest.md#equals)
- [fromBinary](CreditNotesServiceUpdateRequest.md#frombinary)
- [fromJson](CreditNotesServiceUpdateRequest.md#fromjson)
- [fromJsonString](CreditNotesServiceUpdateRequest.md#fromjsonstring)
- [getType](CreditNotesServiceUpdateRequest.md#gettype)
- [toBinary](CreditNotesServiceUpdateRequest.md#tobinary)
- [toJSON](CreditNotesServiceUpdateRequest.md#tojson)
- [toJson](CreditNotesServiceUpdateRequest.md#tojson-1)
- [toJsonString](CreditNotesServiceUpdateRequest.md#tojsonstring)
- [equals](CreditNotesServiceUpdateRequest.md#equals-1)
- [fromBinary](CreditNotesServiceUpdateRequest.md#frombinary-1)
- [fromJson](CreditNotesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](CreditNotesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceUpdateRequest**(`data?`): [`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)\> |

#### Returns

[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

#### Overrides

Message\&lt;CreditNotesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:543](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L543)

## Properties

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/credit_notes.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L513)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/credit_notes.scailo_pb.ts:506](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L506)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/credit_notes.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L541)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/credit_notes.scailo_pb.ts:455](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L455)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 16;

#### Defined in

[src/credit_notes.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L520)

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

[src/credit_notes.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L467)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 17;

#### Defined in

[src/credit_notes.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L527)

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

[src/credit_notes.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L499)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/credit_notes.scailo_pb.ts:534](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L534)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/credit_notes.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L448)

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

[src/credit_notes.scailo_pb.ts:483](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L483)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L550)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:548](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L548)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceUpdateRequest"``

#### Defined in

[src/credit_notes.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L549)

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L576)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L564)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:568](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L568)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceUpdateRequest`](CreditNotesServiceUpdateRequest.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:572](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L572)
