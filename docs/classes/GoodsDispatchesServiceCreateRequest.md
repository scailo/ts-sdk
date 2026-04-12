[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceCreateRequest

# Class: GoodsDispatchesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.GoodsDispatchesServiceCreateRequest

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)\>

  ↳ **`GoodsDispatchesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](GoodsDispatchesServiceCreateRequest.md#entityuuid)
- [formData](GoodsDispatchesServiceCreateRequest.md#formdata)
- [locationId](GoodsDispatchesServiceCreateRequest.md#locationid)
- [refFrom](GoodsDispatchesServiceCreateRequest.md#reffrom)
- [refId](GoodsDispatchesServiceCreateRequest.md#refid)
- [referenceId](GoodsDispatchesServiceCreateRequest.md#referenceid)
- [userComment](GoodsDispatchesServiceCreateRequest.md#usercomment)
- [vaultFolderId](GoodsDispatchesServiceCreateRequest.md#vaultfolderid)
- [fields](GoodsDispatchesServiceCreateRequest.md#fields)
- [runtime](GoodsDispatchesServiceCreateRequest.md#runtime)
- [typeName](GoodsDispatchesServiceCreateRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceCreateRequest.md#clone)
- [equals](GoodsDispatchesServiceCreateRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceCreateRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceCreateRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceCreateRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceCreateRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceCreateRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceCreateRequest.md#tojson)
- [toJson](GoodsDispatchesServiceCreateRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceCreateRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceCreateRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceCreateRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceCreateRequest**(`data?`): [`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)\> |

#### Returns

[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:380](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L380)

## Properties

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

[src/goods_dispatches.scailo_pb.ts:311](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L311)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L378)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L371)

___

### refFrom

• **refFrom**: [`GOODS_DISPATCH_REF_FROM`](../enums/GOODS_DISPATCH_REF_FROM.md) = `GOODS_DISPATCH_REF_FROM.GOODS_DISPATCH_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L357)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L364)

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

[src/goods_dispatches.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L350)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L318)

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

[src/goods_dispatches.scailo_pb.ts:334](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L334)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:387](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L387)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:385](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L385)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceCreateRequest"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L386)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L410)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L398)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L402)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceCreateRequest`](GoodsDispatchesServiceCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_dispatches.scailo_pb.ts#L406)
