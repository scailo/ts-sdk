[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceUpdateRequest

# Class: GoodsReceiptsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.GoodsReceiptsServiceUpdateRequest

## Hierarchy

- `Message`\<[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)\>

  ↳ **`GoodsReceiptsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceUpdateRequest.md#constructor)

### Properties

- [formData](GoodsReceiptsServiceUpdateRequest.md#formdata)
- [id](GoodsReceiptsServiceUpdateRequest.md#id)
- [notifyUsers](GoodsReceiptsServiceUpdateRequest.md#notifyusers)
- [referenceId](GoodsReceiptsServiceUpdateRequest.md#referenceid)
- [userComment](GoodsReceiptsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](GoodsReceiptsServiceUpdateRequest.md#vaultfolderid)
- [vendorBillDate](GoodsReceiptsServiceUpdateRequest.md#vendorbilldate)
- [vendorBillNo](GoodsReceiptsServiceUpdateRequest.md#vendorbillno)
- [fields](GoodsReceiptsServiceUpdateRequest.md#fields)
- [runtime](GoodsReceiptsServiceUpdateRequest.md#runtime)
- [typeName](GoodsReceiptsServiceUpdateRequest.md#typename)

### Methods

- [clone](GoodsReceiptsServiceUpdateRequest.md#clone)
- [equals](GoodsReceiptsServiceUpdateRequest.md#equals)
- [fromBinary](GoodsReceiptsServiceUpdateRequest.md#frombinary)
- [fromJson](GoodsReceiptsServiceUpdateRequest.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceUpdateRequest.md#fromjsonstring)
- [getType](GoodsReceiptsServiceUpdateRequest.md#gettype)
- [toBinary](GoodsReceiptsServiceUpdateRequest.md#tobinary)
- [toJSON](GoodsReceiptsServiceUpdateRequest.md#tojson)
- [toJson](GoodsReceiptsServiceUpdateRequest.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceUpdateRequest.md#tojsonstring)
- [equals](GoodsReceiptsServiceUpdateRequest.md#equals-1)
- [fromBinary](GoodsReceiptsServiceUpdateRequest.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceUpdateRequest**(`data?`): [`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)\> |

#### Returns

[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

#### Overrides

Message\&lt;GoodsReceiptsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/goods_receipts.scailo_pb.ts:558](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L558)

## Properties

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

[src/goods_receipts.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L556)

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

[src/goods_receipts.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L484)

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

[src/goods_receipts.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L496)

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

[src/goods_receipts.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L528)

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

[src/goods_receipts.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L468)

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

[src/goods_receipts.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L512)

___

### vendorBillDate

• **vendorBillDate**: `string` = `""`

The date on which the bill was raised by the vendor

**`Generated`**

from field: string vendor_bill_date = 15;

#### Defined in

[src/goods_receipts.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L542)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 14;

#### Defined in

[src/goods_receipts.scailo_pb.ts:535](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L535)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:565](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L565)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L563)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServiceUpdateRequest"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L564)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md) \| `PlainMessage`\<[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md) \| `PlainMessage`\<[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md) \| `PlainMessage`\<[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L588)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L576)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L580)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceUpdateRequest`](GoodsReceiptsServiceUpdateRequest.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_receipts.scailo_pb.ts#L584)
