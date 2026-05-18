[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServicePaginatedItemsResponse

# Class: CreditNotesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.CreditNotesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)\>

  ↳ **`CreditNotesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](CreditNotesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](CreditNotesServicePaginatedItemsResponse.md#count)
- [offset](CreditNotesServicePaginatedItemsResponse.md#offset)
- [payload](CreditNotesServicePaginatedItemsResponse.md#payload)
- [total](CreditNotesServicePaginatedItemsResponse.md#total)
- [fields](CreditNotesServicePaginatedItemsResponse.md#fields)
- [runtime](CreditNotesServicePaginatedItemsResponse.md#runtime)
- [typeName](CreditNotesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](CreditNotesServicePaginatedItemsResponse.md#clone)
- [equals](CreditNotesServicePaginatedItemsResponse.md#equals)
- [fromBinary](CreditNotesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](CreditNotesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](CreditNotesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](CreditNotesServicePaginatedItemsResponse.md#gettype)
- [toBinary](CreditNotesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](CreditNotesServicePaginatedItemsResponse.md#tojson)
- [toJson](CreditNotesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](CreditNotesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](CreditNotesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](CreditNotesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](CreditNotesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](CreditNotesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServicePaginatedItemsResponse**(`data?`): [`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)\> |

#### Returns

[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;CreditNotesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1943)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/credit_notes.scailo_pb.ts:1913](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1913)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/credit_notes.scailo_pb.ts:1923](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1923)

___

### payload

• **payload**: [`CreditNoteItem`](CreditNoteItem.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.CreditNoteItem payload = 4;

#### Defined in

[src/credit_notes.scailo_pb.ts:1941](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1941)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/credit_notes.scailo_pb.ts:1933](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1933)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1950)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:1948](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1948)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServicePaginatedItemsResponse"``

#### Defined in

[src/credit_notes.scailo_pb.ts:1949](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1949)

## Methods

### clone

▸ **clone**(): [`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:1969](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1969)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1957](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1957)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1961](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1961)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServicePaginatedItemsResponse`](CreditNotesServicePaginatedItemsResponse.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1965](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L1965)
