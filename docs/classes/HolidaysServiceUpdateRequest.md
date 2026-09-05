[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceUpdateRequest

# Class: HolidaysServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.HolidaysServiceUpdateRequest

## Hierarchy

- `Message`\<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\>

  ↳ **`HolidaysServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceUpdateRequest.md#constructor)

### Properties

- [description](HolidaysServiceUpdateRequest.md#description)
- [endOn](HolidaysServiceUpdateRequest.md#endon)
- [id](HolidaysServiceUpdateRequest.md#id)
- [notifyUsers](HolidaysServiceUpdateRequest.md#notifyusers)
- [startOn](HolidaysServiceUpdateRequest.md#starton)
- [title](HolidaysServiceUpdateRequest.md#title)
- [userComment](HolidaysServiceUpdateRequest.md#usercomment)
- [vaultFolderId](HolidaysServiceUpdateRequest.md#vaultfolderid)
- [fields](HolidaysServiceUpdateRequest.md#fields)
- [runtime](HolidaysServiceUpdateRequest.md#runtime)
- [typeName](HolidaysServiceUpdateRequest.md#typename)

### Methods

- [clone](HolidaysServiceUpdateRequest.md#clone)
- [equals](HolidaysServiceUpdateRequest.md#equals)
- [fromBinary](HolidaysServiceUpdateRequest.md#frombinary)
- [fromJson](HolidaysServiceUpdateRequest.md#fromjson)
- [fromJsonString](HolidaysServiceUpdateRequest.md#fromjsonstring)
- [getType](HolidaysServiceUpdateRequest.md#gettype)
- [toBinary](HolidaysServiceUpdateRequest.md#tobinary)
- [toJSON](HolidaysServiceUpdateRequest.md#tojson)
- [toJson](HolidaysServiceUpdateRequest.md#tojson-1)
- [toJsonString](HolidaysServiceUpdateRequest.md#tojsonstring)
- [equals](HolidaysServiceUpdateRequest.md#equals-1)
- [fromBinary](HolidaysServiceUpdateRequest.md#frombinary-1)
- [fromJson](HolidaysServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](HolidaysServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceUpdateRequest**(`data?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\> |

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Overrides

Message\&lt;HolidaysServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/holidays.scailo_pb.ts:327](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L327)

## Properties

### description

• **description**: `string` = `""`

The description of the holiday

**`Generated`**

from field: string description = 11;

#### Defined in

[src/holidays.scailo_pb.ts:311](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L311)

___

### endOn

• **endOn**: `bigint` = `protoInt64.zero`

The end timestamp

**`Generated`**

from field: uint64 end_on = 13;

#### Defined in

[src/holidays.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L325)

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

[src/holidays.scailo_pb.ts:269](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L269)

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

[src/holidays.scailo_pb.ts:281](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L281)

___

### startOn

• **startOn**: `bigint` = `protoInt64.zero`

The start timestamp

**`Generated`**

from field: uint64 start_on = 12;

#### Defined in

[src/holidays.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L318)

___

### title

• **title**: `string` = `""`

The title of the holiday

**`Generated`**

from field: string title = 10;

#### Defined in

[src/holidays.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L304)

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

[src/holidays.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L253)

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

[src/holidays.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L297)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays.scailo_pb.ts:334](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L334)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays.scailo_pb.ts:332](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L332)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.HolidaysServiceUpdateRequest"``

#### Defined in

[src/holidays.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L333)

## Methods

### clone

▸ **clone**(): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md) \| `PlainMessage`\<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md) \| `PlainMessage`\<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md) \| `PlainMessage`\<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L357)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Defined in

[src/holidays.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L345)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Defined in

[src/holidays.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L349)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Defined in

[src/holidays.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L353)
