[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceUpdateRequest

# Class: GoodsDispatchesServiceUpdateRequest

Request message for modifying the core metadata and logistical parameters of an existing Goods Dispatch record.
This payload supports updating external reference IDs (e.g., carrier tracking numbers), document storage locations
(e.g., for packing slips or bills of lading), and dynamic organizational attributes.

**Note:** These modifications are typically restricted to the preliminary or drafting phases of the fulfillment
lifecycle. Once the dispatch is verified and physically shipped (reaching a finalized state), core logistical
details become immutable to ensure an accurate audit trail for downstream billing (Sales Invoices) and inventory deduction.

**`Generated`**

from message Scailo.GoodsDispatchesServiceUpdateRequest

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\>

  ↳ **`GoodsDispatchesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceUpdateRequest.md#constructor)

### Properties

- [formData](GoodsDispatchesServiceUpdateRequest.md#formdata)
- [id](GoodsDispatchesServiceUpdateRequest.md#id)
- [notifyUsers](GoodsDispatchesServiceUpdateRequest.md#notifyusers)
- [referenceId](GoodsDispatchesServiceUpdateRequest.md#referenceid)
- [userComment](GoodsDispatchesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](GoodsDispatchesServiceUpdateRequest.md#vaultfolderid)
- [fields](GoodsDispatchesServiceUpdateRequest.md#fields)
- [runtime](GoodsDispatchesServiceUpdateRequest.md#runtime)
- [typeName](GoodsDispatchesServiceUpdateRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceUpdateRequest.md#clone)
- [equals](GoodsDispatchesServiceUpdateRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceUpdateRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceUpdateRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceUpdateRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceUpdateRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceUpdateRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceUpdateRequest.md#tojson)
- [toJson](GoodsDispatchesServiceUpdateRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceUpdateRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceUpdateRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceUpdateRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceUpdateRequest**(`data?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\> |

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L570)

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

[src/goods_dispatches.scailo_pb.ts:568](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L568)

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

[src/goods_dispatches.scailo_pb.ts:510](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L510)

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

[src/goods_dispatches.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L522)

___

### referenceId

• `Optional` **referenceId**: `string`

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

from field: optional string reference_id = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L554)

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

[src/goods_dispatches.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L494)

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

[src/goods_dispatches.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L538)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L577)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:575](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L575)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceUpdateRequest"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L576)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L598)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L586)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L590)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:594](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L594)
