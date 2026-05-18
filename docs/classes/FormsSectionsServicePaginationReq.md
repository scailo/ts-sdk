[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsSectionsServicePaginationReq

# Class: FormsSectionsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.FormsSectionsServicePaginationReq

## Hierarchy

- `Message`\<[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)\>

  ↳ **`FormsSectionsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](FormsSectionsServicePaginationReq.md#constructor)

### Properties

- [count](FormsSectionsServicePaginationReq.md#count)
- [isActive](FormsSectionsServicePaginationReq.md#isactive)
- [offset](FormsSectionsServicePaginationReq.md#offset)
- [sortKey](FormsSectionsServicePaginationReq.md#sortkey)
- [sortOrder](FormsSectionsServicePaginationReq.md#sortorder)
- [fields](FormsSectionsServicePaginationReq.md#fields)
- [runtime](FormsSectionsServicePaginationReq.md#runtime)
- [typeName](FormsSectionsServicePaginationReq.md#typename)

### Methods

- [clone](FormsSectionsServicePaginationReq.md#clone)
- [equals](FormsSectionsServicePaginationReq.md#equals)
- [fromBinary](FormsSectionsServicePaginationReq.md#frombinary)
- [fromJson](FormsSectionsServicePaginationReq.md#fromjson)
- [fromJsonString](FormsSectionsServicePaginationReq.md#fromjsonstring)
- [getType](FormsSectionsServicePaginationReq.md#gettype)
- [toBinary](FormsSectionsServicePaginationReq.md#tobinary)
- [toJSON](FormsSectionsServicePaginationReq.md#tojson)
- [toJson](FormsSectionsServicePaginationReq.md#tojson-1)
- [toJsonString](FormsSectionsServicePaginationReq.md#tojsonstring)
- [equals](FormsSectionsServicePaginationReq.md#equals-1)
- [fromBinary](FormsSectionsServicePaginationReq.md#frombinary-1)
- [fromJson](FormsSectionsServicePaginationReq.md#fromjson-1)
- [fromJsonString](FormsSectionsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsSectionsServicePaginationReq**(`data?`): [`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)\> |

#### Returns

[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

#### Overrides

Message\&lt;FormsSectionsServicePaginationReq\&gt;.constructor

#### Defined in

[src/forms_sections.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L526)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/forms_sections.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L486)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/forms_sections.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L470)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/forms_sections.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L502)

___

### sortKey

• **sortKey**: [`FORM_SECTION_SORT_KEY`](../enums/FORM_SECTION_SORT_KEY.md) = `FORM_SECTION_SORT_KEY.FORM_SECTION_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.FORM_SECTION_SORT_KEY sort_key = 5;

#### Defined in

[src/forms_sections.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L524)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/forms_sections.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L514)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_sections.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L533)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_sections.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L531)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsSectionsServicePaginationReq"``

#### Defined in

[src/forms_sections.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L532)

## Methods

### clone

▸ **clone**(): [`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md) \| `PlainMessage`\<[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md) \| `PlainMessage`\<[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md) \| `PlainMessage`\<[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_sections.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L553)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

#### Defined in

[src/forms_sections.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L541)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

#### Defined in

[src/forms_sections.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L545)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServicePaginationReq`](FormsSectionsServicePaginationReq.md)

#### Defined in

[src/forms_sections.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/forms_sections.scailo_pb.ts#L549)
