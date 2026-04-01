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

[src/goods_receipts.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L517)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/goods_receipts.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L515)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/goods_receipts.scailo_pb.ts:450](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L450)

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

[src/goods_receipts.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L462)

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

[src/goods_receipts.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L494)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goods_receipts.scailo_pb.ts:443](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L443)

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

[src/goods_receipts.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L478)

___

### vendorBillDate

• **vendorBillDate**: `string` = `""`

The date on which the bill was raised by the vendor

**`Generated`**

from field: string vendor_bill_date = 15;

#### Defined in

[src/goods_receipts.scailo_pb.ts:508](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L508)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 14;

#### Defined in

[src/goods_receipts.scailo_pb.ts:501](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L501)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L524)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L522)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServiceUpdateRequest"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L523)

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

[src/goods_receipts.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L547)

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

[src/goods_receipts.scailo_pb.ts:535](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L535)

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

[src/goods_receipts.scailo_pb.ts:539](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L539)

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

[src/goods_receipts.scailo_pb.ts:543](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/goods_receipts.scailo_pb.ts#L543)
